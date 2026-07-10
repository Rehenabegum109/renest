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
            status: import("../../../generated/prisma").$Enums.RentalStatus;
            createdAt: Date;
            updatedAt: Date;
            message: string | null;
            tenantId: string;
            propertyId: string;
        };
    } & {
        id: string;
        status: import("../../../generated/prisma").$Enums.PaymentStatus;
        createdAt: Date;
        updatedAt: Date;
        transactionId: string;
        amount: number;
        provider: import("../../../generated/prisma").$Enums.PaymentProvider;
        paidAt: Date | null;
        rentalRequestId: string;
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
            status: import("../../../generated/prisma").$Enums.RentalStatus;
            createdAt: Date;
            updatedAt: Date;
            message: string | null;
            tenantId: string;
            propertyId: string;
        };
    } & {
        id: string;
        status: import("../../../generated/prisma").$Enums.PaymentStatus;
        createdAt: Date;
        updatedAt: Date;
        transactionId: string;
        amount: number;
        provider: import("../../../generated/prisma").$Enums.PaymentProvider;
        paidAt: Date | null;
        rentalRequestId: string;
    }>;
    handleStripeWebhook: (event: Stripe.Event) => Promise<true | undefined>;
};
//# sourceMappingURL=payment.service.d.ts.map