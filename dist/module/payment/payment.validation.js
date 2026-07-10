import { z } from "zod";
const createPaymentValidation = z.object({
    body: z.object({
        rentalRequestId: z
            .string()
            .min(1, "Rental request ID is required"),
    }),
});
export const PaymentValidation = {
    createPaymentValidation,
};
//# sourceMappingURL=payment.validation.js.map