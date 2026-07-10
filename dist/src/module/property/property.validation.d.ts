import { z } from "zod";
export declare const PropertyValidation: {
    createPropertyValidation: z.ZodObject<{
        body: z.ZodObject<{
            title: z.ZodString;
            description: z.ZodString;
            location: z.ZodString;
            rentPrice: z.ZodNumber;
            bedrooms: z.ZodNumber;
            bathrooms: z.ZodNumber;
            categoryId: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
    updatePropertyValidation: z.ZodObject<{
        body: z.ZodObject<{
            title: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            location: z.ZodOptional<z.ZodString>;
            rentPrice: z.ZodOptional<z.ZodNumber>;
            bedrooms: z.ZodOptional<z.ZodNumber>;
            bathrooms: z.ZodOptional<z.ZodNumber>;
            categoryId: z.ZodOptional<z.ZodString>;
            isAvailable: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>;
    }, z.core.$strip>;
};
//# sourceMappingURL=property.validation.d.ts.map