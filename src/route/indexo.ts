import express from "express";
import { AuthRoutes } from "../auth/auth.route";
import { landlordRouter, PropertyRoutes } from "../module/property/property.route";
import { CategoryRoutes } from "../module/category/category.route";


const router = express.Router();

router.use("/auth", AuthRoutes);
router.use("/properties", PropertyRoutes);
router.use("/landlord", landlordRouter);
router.use(
 "/categories",
 CategoryRoutes
);
export default router;