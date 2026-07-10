import { z } from "zod";
export declare const AdminValidation: {
    updateUserStatusValidation: z.ZodObject<{
        body: z.ZodObject<{
            status: z.ZodEnum<{
                ACTIVE: "ACTIVE";
                BLOCKED: "BLOCKED";
            }>;
        }, z.core.$strip>;
    }, z.core.$strip>;
};
//# sourceMappingURL=admin.validation.d.ts.map