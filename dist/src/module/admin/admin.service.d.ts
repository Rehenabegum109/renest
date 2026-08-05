export declare const AdminService: {
    getAllUsers: () => Promise<{
        id: string;
        name: string;
        email: string;
        phone: string | null;
        role: import("../../../generated/prisma/index.js").$Enums.Role;
        status: import("../../../generated/prisma/index.js").$Enums.UserStatus;
        createdAt: Date;
        profileImage: never;
    }[]>;
    updateUserStatus: (id: string, status: "ACTIVE" | "BLOCKED") => Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
        phone: string | null;
        role: import("../../../generated/prisma/index.js").$Enums.Role;
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
        payments: never;
        property: {
            id: string;
            title: string;
            location: never;
            rentPrice: never;
        };
        tenant: {
            id: string;
            name: string;
            email: string;
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
};
//# sourceMappingURL=admin.service.d.ts.map