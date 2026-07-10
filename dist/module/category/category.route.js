import express from "express";
import { CategoryController } from "./category.controller";
import { auth } from "../../middleware/auth";
import { CategoryValidation } from "./category.validation";
import { validateRequest } from "../../middleware/validateRequest";
const router = express.Router();
// Public
router.get("/", CategoryController.getAllCategories);
router.get("/:id", CategoryController.getSingleCategory);
router.post("/", auth("ADMIN"), validateRequest(CategoryValidation.createCategoryValidation), CategoryController.createCategory);
router.patch("/:id", auth("ADMIN"), validateRequest(CategoryValidation.updateCategoryValidation), CategoryController.updateCategory);
router.delete("/:id", auth("ADMIN"), CategoryController.deleteCategory);
export const CategoryRoutes = router;
//# sourceMappingURL=category.route.js.map