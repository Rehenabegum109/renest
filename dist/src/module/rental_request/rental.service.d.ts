import { RentalStatus } from "../../../generated/prisma/client.js";
export declare const RentalService: {
    createRentalRequest: (payload: {
        propertyId: string;
        moveInDate: string;
    }, tenantId: string) => Promise<{
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
        tenant: {
            id: string;
            role: import("../../../generated/prisma/index.js").$Enums.Role;
            name: string;
            email: string;
            password: string;
            phone: string | null;
            status: import("../../../generated/prisma/index.js").$Enums.UserStatus;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        status: import("../../../generated/prisma/index.js").$Enums.RentalStatus;
        createdAt: Date;
        updatedAt: Date;
        propertyId: string;
        moveInDate: Date | null;
        tenantId: string;
    }>;
    getMyRentalRequests: (tenantId: string) => Promise<({
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
    })[]>;
    getRentalById: (id: string) => Promise<{
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
        tenant: {
            id: string;
            role: import("../../../generated/prisma/index.js").$Enums.Role;
            name: string;
            email: string;
            password: string;
            phone: string | null;
            status: import("../../../generated/prisma/index.js").$Enums.UserStatus;
            createdAt: Date;
            updatedAt: Date;
        };
        payment: {
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
        } | null;
    } & {
        id: string;
        status: import("../../../generated/prisma/index.js").$Enums.RentalStatus;
        createdAt: Date;
        updatedAt: Date;
        propertyId: string;
        moveInDate: Date | null;
        tenantId: string;
    }>;
    getLandlordRequests: (landlordId: string) => Promise<({
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
        tenant: {
            id: string;
            role: import("../../../generated/prisma/index.js").$Enums.Role;
            name: string;
            email: string;
            password: string;
            phone: string | null;
            status: import("../../../generated/prisma/index.js").$Enums.UserStatus;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        status: import("../../../generated/prisma/index.js").$Enums.RentalStatus;
        createdAt: Date;
        updatedAt: Date;
        propertyId: string;
        moveInDate: Date | null;
        tenantId: string;
    })[]>;
    updateRentalStatus: (id: string, status: RentalStatus) => Promise<{
        id: string;
        status: import("../../../generated/prisma/index.js").$Enums.RentalStatus;
        createdAt: Date;
        updatedAt: Date;
        propertyId: string;
        moveInDate: Date | null;
        tenantId: string;
    }>;
};
//# sourceMappingURL=rental.service.d.ts.map