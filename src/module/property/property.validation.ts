import { z } from "zod";

const createPropertyValidation = z.object({
  body: z.object({
    title: z
      .string()
      .min(3, "Title must be at least 3 characters"),

    description: z
      .string()
      .min(10, "Description must be at least 10 characters"),

    location: z
      .string()
      .min(2, "Location is required"),

    rentPrice: z
      .number()
      .positive("Rent price must be greater than 0"),

    bedrooms: z
      .number()
      .int()
      .min(1, "Bedrooms must be at least 1"),

    bathrooms: z
      .number()
      .int()
      .min(1, "Bathrooms must be at least 1"),

    categoryId: z
      .string()
      .min(1, "Category is required"),
  }),
});

const updatePropertyValidation = z.object({
  body: z.object({
    title: z.string().min(3).optional(),
    description: z.string().min(10).optional(),
    location: z.string().optional(),
    rentPrice: z.number().positive().optional(),
    bedrooms: z.number().int().min(1).optional(),
    bathrooms: z.number().int().min(1).optional(),
    categoryId: z.string().optional(),
    isAvailable: z.boolean().optional(),
  }),
});

export const PropertyValidation = {
  createPropertyValidation,
  updatePropertyValidation,
};