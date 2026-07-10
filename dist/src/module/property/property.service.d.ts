export declare const PropertyService: {
    createProperty: (payload: any, landlordId: string) => Promise<{
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
            password: string;
            phone: string | null;
            profileImage: string | null;
            role: import("../../../generated/prisma/index.js").$Enums.Role;
            status: import("../../../generated/prisma/index.js").$Enums.UserStatus;
            createdAt: Date;
            updatedAt: Date;
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
    }>;
    getAllProperties: (query: any) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
        };
        data: ({
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
                password: string;
                phone: string | null;
                profileImage: string | null;
                role: import("../../../generated/prisma/index.js").$Enums.Role;
                status: import("../../../generated/prisma/index.js").$Enums.UserStatus;
                createdAt: Date;
                updatedAt: Date;
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
        })[];
    }>;
    getPropertyById: (id: string) => Promise<{
        reviews: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            propertyId: string;
            tenantId: string;
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
            password: string;
            phone: string | null;
            profileImage: string | null;
            role: import("../../../generated/prisma/index.js").$Enums.Role;
            status: import("../../../generated/prisma/index.js").$Enums.UserStatus;
            createdAt: Date;
            updatedAt: Date;
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
    }>;
    updateProperty: (id: string, payload: any) => Promise<{
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
            password: string;
            phone: string | null;
            profileImage: string | null;
            role: import("../../../generated/prisma/index.js").$Enums.Role;
            status: import("../../../generated/prisma/index.js").$Enums.UserStatus;
            createdAt: Date;
            updatedAt: Date;
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
    }>;
    deleteProperty: (id: string) => Promise<{
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
    }>;
};
//# sourceMappingURL=property.service.d.ts.map