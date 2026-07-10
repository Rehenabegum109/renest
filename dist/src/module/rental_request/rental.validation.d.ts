import { z } from "zod";
export declare const RentalValidation: {
    createRentalValidation: z.ZodObject<{
        body: z.ZodObject<{
            propertyId: z.ZodString;
            message: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    updateRentalStatusValidation: z.ZodObject<{
        body: z.ZodObject<{
            status: z.ZodEnum<{
                APPROVED: "APPROVED";
                REJECTED: "REJECTED";
            }>;
        }, z.core.$strip>;
    }, z.core.$strip>;
};
//# sourceMappingURL=rental.validation.d.ts.map