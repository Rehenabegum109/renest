import { z } from "zod";
const createCategoryValidation = z.object({
    body: z.object({
        name: z
            .string()
            .min(2, "Category name must be at least 2 characters")
            .max(50, "Category name is too long"),
        description: z
            .string()
            .max(500, "Description is too long")
            .optional(),
    }),
});
const updateCategoryValidation = z.object({
    body: z.object({
        name: z
            .string()
            .min(2, "Category name must be at least 2 characters")
            .max(50, "Category name is too long")
            .optional(),
        description: z
            .string()
            .max(500, "Description is too long")
            .optional(),
    }),
});
export const CategoryValidation = {
    createCategoryValidation,
    updateCategoryValidation,
};
//# sourceMappingURL=category.validation.js.map