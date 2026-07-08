import express from "express";
import { PropertyController } from "./property.controller";
import { auth } from "../../middleware/auth";


const router = express.Router();


// Public
router.get(
  "/",
  PropertyController.getAllProperties
);

router.get(
  "/:id",
  PropertyController.getPropertyById
);


// Landlord
export const landlordRouter = express.Router();

landlordRouter.post(
  "/properties",
  auth("LANDLORD"),
  PropertyController.createProperty
);

landlordRouter.put(
  "/properties/:id",
  auth("LANDLORD"),
  PropertyController.updateProperty
);

landlordRouter.delete(
  "/properties/:id",
  auth("LANDLORD"),
  PropertyController.deleteProperty
);


export const PropertyRoutes = router;