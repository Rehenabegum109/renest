import { z } from "zod";

const createReviewValidation = z.object({
  body: z.object({
    propertyId: z
      .string()
      .min(1, "Property ID is required"),

    rating: z
      .number()
      .min(1, "Rating must be at least 1")
      .max(5, "Rating cannot be more than 5"),

    comment: z
      .string()
      .min(5, "Comment must be at least 5 characters")
      .max(500, "Comment cannot exceed 500 characters"),
  }),
});

export const ReviewValidation = {
  createReviewValidation,
};