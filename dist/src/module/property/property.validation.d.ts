import { z } from "zod";
export declare const PropertyValidation: {
    createPropertyValidation: z.ZodObject<{
        body: z.ZodObject<{
            title: z.ZodString;
            description: z.ZodString;
            address: z.ZodString;
            city: z.ZodString;
            rent: z.ZodNumber;
            bedrooms: z.ZodNumber;
            bathrooms: z.ZodNumber;
            image: z.ZodOptional<z.ZodString>;
            categoryId: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
    updatePropertyValidation: z.ZodObject<{
        body: z.ZodObject<{
            title: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            address: z.ZodOptional<z.ZodString>;
            city: z.ZodOptional<z.ZodString>;
            rent: z.ZodOptional<z.ZodNumber>;
            bedrooms: z.ZodOptional<z.ZodNumber>;
            bathrooms: z.ZodOptional<z.ZodNumber>;
            image: z.ZodOptional<z.ZodString>;
            categoryId: z.ZodOptional<z.ZodString>;
            status: z.ZodOptional<z.ZodEnum<{
                AVAILABLE: "AVAILABLE";
                RENTED: "RENTED";
            }>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
};
//# sourceMappingURL=property.validation.d.ts.map