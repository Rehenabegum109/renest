import express from "express";
import { CategoryController } from "./category.controller";
import { auth } from "../../middleware/auth";


const router = express.Router();


// Public
router.get(
 "/",
 CategoryController.getAllCategories
);


router.get(
 "/:id",
 CategoryController.getSingleCategory
);


// Admin
router.post(
 "/",
 auth("ADMIN"),
 CategoryController.createCategory
);


router.patch(
 "/:id",
 auth("ADMIN"),
 CategoryController.updateCategory
);


router.delete(
 "/:id",
 auth("ADMIN"),
 CategoryController.deleteCategory
);



export const CategoryRoutes = router;