import { z } from "zod";

const createPropertyValidation = z.object({
  body: z.object({
    title: z
      .string()
      .min(3, "Title must be at least 3 characters"),

    description: z
      .string()
      .min(10, "Description must be at least 10 characters"),

    address: z
      .string()
      .min(2, "Address is required"),

    city: z
      .string()
      .min(2, "City is required"),

    rent: z
      .number()
      .positive("Rent must be greater than 0"),

    bedrooms: z
      .number()
      .int()
      .min(1, "Bedrooms must be at least 1"),

    bathrooms: z
      .number()
      .int()
      .min(1, "Bathrooms must be at least 1"),

    image: z
      .string()
      .optional(),

    categoryId: z
      .string()
      .min(1, "Category is required"),
  }),
});


const updatePropertyValidation = z.object({
  body: z.object({
    title: z.string().min(3).optional(),

    description: z.string().min(10).optional(),

    address: z.string().optional(),

    city: z.string().optional(),

    rent: z
      .number()
      .positive()
      .optional(),

    bedrooms: z
      .number()
      .int()
      .min(1)
      .optional(),

    bathrooms: z
      .number()
      .int()
      .min(1)
      .optional(),

    image: z.string().optional(),

    categoryId: z.string().optional(),

    status: z.enum([
      "AVAILABLE",
      "RENTED"
    ]).optional(),
  }),
});


export const PropertyValidation = {
  createPropertyValidation,
  updatePropertyValidation,
};