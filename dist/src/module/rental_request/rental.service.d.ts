import { RentalStatus } from "../../../generated/prisma/index.js";
export declare const RentalService: {
    createRentalRequest: (payload: any, tenantId: string) => Promise<{
        id: string;
        status: import("../../../generated/prisma/index.js").$Enums.RentalStatus;
        createdAt: Date;
        updatedAt: Date;
        propertyId: string;
        moveInDate: Date;
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
        moveInDate: Date;
        tenantId: string;
    })[]>;
    getRentalById: (id: string) => Promise<{
        payments: never;
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
            name: string;
            email: string;
            password: string;
            phone: string | null;
            role: import("../../../generated/prisma/index.js").$Enums.Role;
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
        moveInDate: Date;
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
            name: string;
            email: string;
            password: string;
            phone: string | null;
            role: import("../../../generated/prisma/index.js").$Enums.Role;
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
        moveInDate: Date;
        tenantId: string;
    })[]>;
    updateRentalStatus: (id: string, status: RentalStatus) => Promise<{
        id: string;
        status: import("../../../generated/prisma/index.js").$Enums.RentalStatus;
        createdAt: Date;
        updatedAt: Date;
        propertyId: string;
        moveInDate: Date;
        tenantId: string;
    }>;
};
//# sourceMappingURL=rental.service.d.ts.map