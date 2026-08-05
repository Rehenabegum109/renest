export declare const AdminService: {
    getDashboardStats: () => Promise<{
        totalUsers: number;
        totalProperties: number;
        totalRentals: number;
        totalPayments: number;
    }>;
    getAllUsers: () => Promise<{
        id: string;
        role: import("../../../generated/prisma/index.js").$Enums.Role;
        name: string;
        email: string;
        phone: string | null;
        status: import("../../../generated/prisma/index.js").$Enums.UserStatus;
        createdAt: Date;
    }[]>;
    updateUserStatus: (id: string, status: "ACTIVE" | "BLOCKED") => Promise<{
        id: string;
        role: import("../../../generated/prisma/index.js").$Enums.Role;
        name: string;
        email: string;
        password: string;
        phone: string | null;
        status: import("../../../generated/prisma/index.js").$Enums.UserStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAllProperties: () => Promise<({
        reviews: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            propertyId: string;
            userId: string;
            rating: number;
            comment: string;
        }[];
        landlord: {
            id: string;
            name: string;
            email: string;
        };
        category: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
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
    })[]>;
    getAllRentalRequests: () => Promise<({
        property: {
            id: string;
            status: import("../../../generated/prisma/index.js").$Enums.PropertyStatus;
            title: string;
            address: string;
            city: string;
            rent: number;
        };
        tenant: {
            id: string;
            name: string;
            email: string;
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
    })[]>;
    deleteProperty: (id: string) => Promise<{
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
    }>;
};
//# sourceMappingURL=admin.service.d.ts.map