export declare const PropertyService: {
    createProperty: (payload: any, landlordId: string) => Promise<{
        landlord: {
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
    }>;
    getAllProperties: (query: any) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
        };
        data: ({
            landlord: {
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
        })[];
    }>;
    getPropertyById: (id: string) => Promise<{
        landlord: {
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
    }>;
    getMyProperties: (landlordId: string) => Promise<{
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
    }[]>;
    updateProperty: (id: string, payload: any) => Promise<{
        landlord: {
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
    }>;
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
//# sourceMappingURL=property.service.d.ts.map