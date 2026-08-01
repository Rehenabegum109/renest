import Stripe from "stripe";
export declare const PaymentService: {
    createCheckoutSession: (rentalRequestId: string, userId: string) => Promise<{
        checkoutUrl: string | null;
    }>;
    getMyPayments: (userId: string) => Promise<any>;
    getPaymentById: (id: string) => Promise<any>;
    handleStripeWebhook: (event: Stripe.Event) => Promise<true | undefined>;
};
//# sourceMappingURL=payment.service.d.ts.map