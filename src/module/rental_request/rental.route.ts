import express from "express";
import { auth } from "../../middleware/auth";
import { RentalController } from "./rental.controller";

const router = express.Router();

// Tenant
router.post("/", auth("TENANT"), RentalController.createRentalRequest);

router.get("/", auth("TENANT"), RentalController.getMyRentalRequests);


router.get(
  "/landlord/requests",
  auth("LANDLORD"),
  RentalController.getLandlordRequests
);

router.patch(
  "/landlord/requests/:id",
  auth("LANDLORD"),
  RentalController.updateRentalStatus
);


router.get(
  "/:id",
  auth("TENANT"),
  RentalController.getRentalById
);

export const RentalRoutes = router;
