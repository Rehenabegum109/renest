
import express from "express";
import { PropertyController } from "./property.controller.js";
import { auth } from "../../middleware/auth.js";
import { PropertyValidation } from "./property.validation.js";
import { validateRequest } from "../../middleware/validateRequest.js";

const router = express.Router();

// Public
router.get("/", PropertyController.getAllProperties);



// Landlord
router.post(
  "/",
  auth("LANDLORD"),
  validateRequest(PropertyValidation.createPropertyValidation),
  PropertyController.createProperty
);

router.get(
  "/my-properties",
  auth("LANDLORD"),
  PropertyController.getMyProperties
);
router.patch(
  "/:id",
  auth("LANDLORD"),
  validateRequest(PropertyValidation.updatePropertyValidation),
  PropertyController.updateProperty
);
router.get("/:id", PropertyController.getPropertyById);

router.delete(
  "/:id",
  auth("LANDLORD"),
  PropertyController.deleteProperty
);


export const PropertyRoutes = router;