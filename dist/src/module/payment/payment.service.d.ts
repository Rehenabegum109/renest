import Stripe from "stripe";
export declare const PaymentService: {
    createCheckoutSession: (rentalRequestId: string, userId: string) => Promise<{
        checkoutUrl: string | null;
    }>;
    getMyPayments: (userId: string) => Promise<({
        rentalRequest: {
            property: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                description: string;
                location: string;
                rentPrice: number;
                bedrooms: number;
                bathrooms: number;
                isAvailable: boolean;
                landlordId: string;
                categoryId: string;
            };
        } & {
            id: string;
            status: import("../../../generated/prisma/index.js").$Enums.RentalStatus;
            createdAt: Date;
            updatedAt: Date;
            message: string | null;
            propertyId: string;
            tenantId: string;
        };
    } & {
        id: string;
        status: import("../../../generated/prisma/index.js").$Enums.PaymentStatus;
        createdAt: Date;
        updatedAt: Date;
        rentalRequestId: string;
        transactionId: string;
        amount: number;
        provider: import("../../../generated/prisma/index.js").$Enums.PaymentProvider;
        paidAt: Date | null;
    })[]>;
    getPaymentById: (id: string) => Promise<{
        rentalRequest: {
            property: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                description: string;
                location: string;
                rentPrice: number;
                bedrooms: number;
                bathrooms: number;
                isAvailable: boolean;
                landlordId: string;
                categoryId: string;
            };
        } & {
            id: string;
            status: import("../../../generated/prisma/index.js").$Enums.RentalStatus;
            createdAt: Date;
            updatedAt: Date;
            message: string | null;
            propertyId: string;
            tenantId: string;
        };
    } & {
        id: string;
        status: import("../../../generated/prisma/index.js").$Enums.PaymentStatus;
        createdAt: Date;
        updatedAt: Date;
        rentalRequestId: string;
        transactionId: string;
        amount: number;
        provider: import("../../../generated/prisma/index.js").$Enums.PaymentProvider;
        paidAt: Date | null;
    }>;
    handleStripeWebhook: (event: Stripe.Event) => Promise<true | undefined>;
};
//# sourceMappingURL=payment.service.d.ts.map