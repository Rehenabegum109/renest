import { z } from "zod";
const updateUserStatusValidation = z.object({
    body: z.object({
        status: z.enum(["ACTIVE", "BLOCKED"]),
    }),
});
export const AdminValidation = {
    updateUserStatusValidation,
};
//# sourceMappingURL=admin.validation.js.map