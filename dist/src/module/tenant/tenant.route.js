import express from "express";
import { auth } from "../../middleware/auth.js";
import { TenantController } from "./tenant.controller.js";
const router = express.Router();
router.get("/dashboard", auth("TENANT"), TenantController.getDashboardStats);
export const TenantRoutes = router;
//# sourceMappingURL=tenant.route.js.map