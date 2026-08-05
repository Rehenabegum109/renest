import { z } from "zod";
const createRentalValidation = z.object({
    body: z.object({
        propertyId: z.string().min(1, "Property ID is required"),
        moveInDate: z.string().min(1, "Move-in date is required"),
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
//# sourceMappingURL=rental.validation.js.map