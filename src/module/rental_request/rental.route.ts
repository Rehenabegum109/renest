import express from "express";
import { auth } from "../../middleware/auth.js";
import { RentalController } from "./rental.controller.js";
import { RentalValidation } from "./rental.validation.js";
import { validateRequest } from "../../middleware/validateRequest.js";

const router = express.Router();

// Tenant
router.post(
  "/",
  auth("TENANT"),
  validateRequest(RentalValidation.createRentalValidation),
  RentalController.createRentalRequest
);

router.get("/", auth("TENANT"), RentalController.getMyRentalRequests);


router.get(
  "/landlord/requests",
  auth("LANDLORD"),
  RentalController.getLandlordRequests
);

router.patch(
  "/landlord/requests/:id",
  auth("LANDLORD"),
  validateRequest(RentalValidation.updateRentalStatusValidation),
  RentalController.updateRentalStatus
);


router.get(
  "/:id",
  auth("TENANT"),
  RentalController.getRentalById
);

export const RentalRoutes = router;
