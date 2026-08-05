import express from "express";
import { AdminController } from "./admin.controller.js";
import { auth } from "../../middleware/auth.js";
import { AdminValidation } from "./admin.validation.js";
import { validateRequest } from "../../middleware/validateRequest.js";
const router = express.Router();
router.get("/dashboard", auth("ADMIN"), AdminController.getDashboardStats);
router.get("/users", auth("ADMIN"), AdminController.getAllUsers);
router.patch("/users/:id", auth("ADMIN"), validateRequest(AdminValidation.updateUserStatusValidation), AdminController.updateUserStatus);
router.get("/properties", auth("ADMIN"), AdminController.getAllProperties);
router.get("/rentals", auth("ADMIN"), AdminController.getAllRentalRequests);
router.delete("/properties/:id", auth("ADMIN"), AdminController.deleteProperty);
export const AdminRoutes = router;
//# sourceMappingURL=admin.route.js.map