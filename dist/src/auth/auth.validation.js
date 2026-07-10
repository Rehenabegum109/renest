import { z } from "zod";
const registerValidation = z.object({
    body: z.object({
        name: z.string().min(2),
        email: z.string().email(),
        password: z.string().min(6),
        role: z.enum(["TENANT", "LANDLORD"]),
        phone: z.string().optional(),
        profileImage: z.string().optional(),
    }),
});
const loginValidation = z.object({
    body: z.object({
        email: z.string().email(),
        password: z.string().min(6),
    }),
});
export const AuthValidation = {
    registerValidation,
    loginValidation,
};
//# sourceMappingURL=auth.validation.js.map