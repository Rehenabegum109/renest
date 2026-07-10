export declare const AdminService: {
    getAllUsers: () => Promise<{
        id: string;
        name: string;
        email: string;
        phone: string | null;
        profileImage: string | null;
        role: import("../../../generated/prisma").$Enums.Role;
        status: import("../../../generated/prisma").$Enums.UserStatus;
        createdAt: Date;
    }[]>;
    updateUserStatus: (id: string, status: "ACTIVE" | "BLOCKED") => Promise<{
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
    }>;
    getAllProperties: () => Promise<({
        reviews: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            tenantId: string;
            propertyId: string;
            rating: number;
            comment: string | null;
        }[];
        category: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
        };
        landlord: {
            id: string;
            name: string;
            email: string;
        };
    } & {
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
    })[]>;
    getAllRentalRequests: () => Promise<({
        property: {
            id: string;
            title: string;
            location: string;
            rentPrice: number;
        };
        payments: {
            id: string;
            status: import("../../../generated/prisma").$Enums.PaymentStatus;
            createdAt: Date;
            updatedAt: Date;
            transactionId: string;
            amount: number;
            provider: import("../../../generated/prisma").$Enums.PaymentProvider;
            paidAt: Date | null;
            rentalRequestId: string;
        }[];
        tenant: {
            id: string;
            name: string;
            email: string;
        };
    } & {
        id: string;
        status: import("../../../generated/prisma").$Enums.RentalStatus;
        createdAt: Date;
        updatedAt: Date;
        message: string | null;
        tenantId: string;
        propertyId: string;
    })[]>;
};
//# sourceMappingURL=admin.service.d.ts.map