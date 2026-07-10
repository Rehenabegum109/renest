import express from "express";
import { PropertyController } from "./property.controller";
import { auth } from "../../middleware/auth";
import { PropertyValidation } from "./property.validation";
import { validateRequest } from "../../middleware/validateRequest";
const router = express.Router();
// Public
router.get("/", PropertyController.getAllProperties);
router.get("/:id", PropertyController.getPropertyById);
export const landlordRouter = express.Router();
landlordRouter.post("/properties", auth("LANDLORD"), validateRequest(PropertyValidation.createPropertyValidation), PropertyController.createProperty);
landlordRouter.put("/properties/:id", auth("LANDLORD"), validateRequest(PropertyValidation.updatePropertyValidation), PropertyController.updateProperty);
landlordRouter.delete("/properties/:id", auth("LANDLORD"), PropertyController.deleteProperty);
export const PropertyRoutes = router;
//# sourceMappingURL=property.route.js.map