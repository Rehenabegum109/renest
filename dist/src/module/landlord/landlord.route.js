import express from "express";
import { auth } from "../../middleware/auth.js";
import { LandlordController } from "./landlord.controller.js";
const router = express.Router();
router.get("/dashboard", auth("LANDLORD"), LandlordController.getDashboardStats);
export const LandlordRoutes = router;
//# sourceMappingURL=landlord.route.js.map