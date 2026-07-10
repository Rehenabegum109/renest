import express from "express";
import { AuthRoutes } from "../auth/auth.route";
import { landlordRouter, PropertyRoutes } from "../module/property/property.route";
import { CategoryRoutes } from "../module/category/category.route";
import { RentalRoutes } from "../module/rental_request/rental.route";
import { PaymentRoutes } from "../module/payment/payment.route";
import { ReviewRoutes } from "../module/review/review.route";
import { AdminRoutes } from "../module/admin/admin.route";
const router = express.Router();
router.use("/auth", AuthRoutes);
router.use("/properties", PropertyRoutes);
router.use("/landlord", landlordRouter);
router.use("/categories", CategoryRoutes);
router.use("/rentals", RentalRoutes);
router.use("/reviews", ReviewRoutes);
router.use("/payments", PaymentRoutes);
router.use("/admin", AdminRoutes);
export default router;
//# sourceMappingURL=index.js.map