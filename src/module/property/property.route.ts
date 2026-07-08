import { Router } from "express";
import { PropertyController } from "./property.controller";
import { auth } from "../../middleware/auth";


const router = Router();

router.post(
  "/landlord/properties",
  auth("LANDLORD"),
  PropertyController.createProperty
);

export default router;