import { RentalStatus } from "../../../generated/prisma";
export declare const RentalService: {
    createRentalRequest: (payload: any, tenantId: string) => Promise<{
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
        tenant: {
            id: string;
            name: string;
            email: string;
            password: string;
            phone: string | null;
            profileImage: string | null;
            role: import("../../../generated/prisma").$Enums.Role;
            status: import("../../../generated/prisma").$Enums.UserStatus;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        status: import("../../../generated/prisma").$Enums.RentalStatus;
        createdAt: Date;
        updatedAt: Date;
        message: string | null;
        propertyId: string;
        tenantId: string;
    }>;
    getMyRentalRequests: (tenantId: string) => Promise<({
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
        propertyId: string;
        tenantId: string;
    })[]>;
    getRentalById: (id: string) => Promise<{
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
        payments: {
            id: string;
            status: import("../../../generated/prisma").$Enums.PaymentStatus;
            createdAt: Date;
            updatedAt: Date;
            rentalRequestId: string;
            transactionId: string;
            amount: number;
            provider: import("../../../generated/prisma").$Enums.PaymentProvider;
            paidAt: Date | null;
        }[];
        tenant: {
            id: string;
            name: string;
            email: string;
            password: string;
            phone: string | null;
            profileImage: string | null;
            role: import("../../../generated/prisma").$Enums.Role;
            status: import("../../../generated/prisma").$Enums.UserStatus;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        status: import("../../../generated/prisma").$Enums.RentalStatus;
        createdAt: Date;
        updatedAt: Date;
        message: string | null;
        propertyId: string;
        tenantId: string;
    }>;
    getLandlordRequests: (landlordId: string) => Promise<({
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
        tenant: {
            id: string;
            name: string;
            email: string;
            password: string;
            phone: string | null;
            profileImage: string | null;
            role: import("../../../generated/prisma").$Enums.Role;
            status: import("../../../generated/prisma").$Enums.UserStatus;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        status: import("../../../generated/prisma").$Enums.RentalStatus;
        createdAt: Date;
        updatedAt: Date;
        message: string | null;
        propertyId: string;
        tenantId: string;
    })[]>;
    updateRentalStatus: (id: string, status: RentalStatus) => Promise<{
        id: string;
        status: import("../../../generated/prisma").$Enums.RentalStatus;
        createdAt: Date;
        updatedAt: Date;
        message: string | null;
        propertyId: string;
        tenantId: string;
    }>;
};
//# sourceMappingURL=rental.service.d.ts.map