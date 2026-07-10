import express from "express";
import { CategoryController } from "./category.controller.js";
import { auth } from "../../middleware/auth.js";
import { CategoryValidation } from "./category.validation.js";
import { validateRequest } from "../../middleware/validateRequest.js";
const router = express.Router();
// Public
router.get("/", CategoryController.getAllCategories);
router.get("/:id", CategoryController.getSingleCategory);
router.post("/", auth("ADMIN"), validateRequest(CategoryValidation.createCategoryValidation), CategoryController.createCategory);
router.patch("/:id", auth("ADMIN"), validateRequest(CategoryValidation.updateCategoryValidation), CategoryController.updateCategory);
router.delete("/:id", auth("ADMIN"), CategoryController.deleteCategory);
export const CategoryRoutes = router;
//# sourceMappingURL=category.route.js.map