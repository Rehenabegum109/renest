import Stripe from "stripe";
export declare const PaymentService: {
    createCheckoutSession: (rentalRequestId: string, userId: string) => Promise<{
        checkoutUrl: string | null;
    }>;
    getMyPayments: (userId: string) => Promise<({
        rentalRequest: {
            property: {
                id: string;
                status: import("../../../generated/prisma/index.js").$Enums.PropertyStatus;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                description: string;
                address: string;
                city: string;
                rent: number;
                bedrooms: number;
                bathrooms: number;
                image: string | null;
                landlordId: string;
                categoryId: string;
            };
        } & {
            id: string;
            status: import("../../../generated/prisma/index.js").$Enums.RentalStatus;
            createdAt: Date;
            updatedAt: Date;
            propertyId: string;
            moveInDate: Date | null;
            tenantId: string;
        };
    } & {
        id: string;
        status: import("../../../generated/prisma/index.js").$Enums.PaymentStatus;
        createdAt: Date;
        updatedAt: Date;
        rentalRequestId: string;
        transactionId: string | null;
        amount: number;
        provider: import("../../../generated/prisma/index.js").$Enums.PaymentProvider;
        paidAt: Date | null;
        userId: string;
    })[]>;
    getPaymentById: (id: string) => Promise<{
        rentalRequest: {
            property: {
                id: string;
                status: import("../../../generated/prisma/index.js").$Enums.PropertyStatus;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                description: string;
                address: string;
                city: string;
                rent: number;
                bedrooms: number;
                bathrooms: number;
                image: string | null;
                landlordId: string;
                categoryId: string;
            };
        } & {
            id: string;
            status: import("../../../generated/prisma/index.js").$Enums.RentalStatus;
            createdAt: Date;
            updatedAt: Date;
            propertyId: string;
            moveInDate: Date | null;
            tenantId: string;
        };
    } & {
        id: string;
        status: import("../../../generated/prisma/index.js").$Enums.PaymentStatus;
        createdAt: Date;
        updatedAt: Date;
        rentalRequestId: string;
        transactionId: string | null;
        amount: number;
        provider: import("../../../generated/prisma/index.js").$Enums.PaymentProvider;
        paidAt: Date | null;
        userId: string;
    }>;
    handleStripeWebhook: (event: Stripe.Event) => Promise<true | undefined>;
};
//# sourceMappingURL=payment.service.d.ts.map