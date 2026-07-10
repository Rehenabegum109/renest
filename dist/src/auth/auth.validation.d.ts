import { z } from "zod";
export declare const AuthValidation: {
    registerValidation: z.ZodObject<{
        body: z.ZodObject<{
            name: z.ZodString;
            email: z.ZodString;
            password: z.ZodString;
            role: z.ZodEnum<{
                TENANT: "TENANT";
                LANDLORD: "LANDLORD";
            }>;
            phone: z.ZodOptional<z.ZodString>;
            profileImage: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    loginValidation: z.ZodObject<{
        body: z.ZodObject<{
            email: z.ZodString;
            password: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
};
//# sourceMappingURL=auth.validation.d.ts.map