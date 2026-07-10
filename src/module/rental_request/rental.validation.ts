import { z } from "zod";

const createRentalValidation = z.object({
  body: z.object({
    propertyId: z
      .string()
      .min(1, "Property ID is required"),

    message: z
      .string()
      .max(500, "Message cannot exceed 500 characters")
      .optional(),
  }),
});

const updateRentalStatusValidation = z.object({
  body: z.object({
    status: z.enum(["APPROVED", "REJECTED"]),
  }),
});

export const RentalValidation = {
  createRentalValidation,
  updateRentalStatusValidation,
};