import express from "express";
import { AuthRoutes } from "../auth/auth.route.js";
import { landlordRouter, PropertyRoutes } from "../module/property/property.route.js";
import { CategoryRoutes } from "../module/category/category.route.js";
import { RentalRoutes } from "../module/rental_request/rental.route.js";
import { PaymentRoutes } from "../module/payment/payment.route.js";
import { ReviewRoutes } from "../module/review/review.route.js";
import { AdminRoutes } from "../module/admin/admin.route.js";



const router = express.Router();

router.use("/auth", AuthRoutes);
router.use("/properties", PropertyRoutes);
router.use("/landlord", landlordRouter);
router.use(
 "/categories",
 CategoryRoutes
);
router.use("/rentals", RentalRoutes);
router.use("/reviews", ReviewRoutes);
router.use("/payments", PaymentRoutes);
router.use("/admin", AdminRoutes);
export default router;