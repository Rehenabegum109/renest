export declare const CategoryService: {
    createCategory: (payload: {
        name: string;
        description?: string;
    }) => Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAllCategories: () => Promise<({
        properties: {
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
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    getSingleCategory: (id: string) => Promise<{
        properties: {
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
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateCategory: (id: string, payload: {
        name?: string;
        description?: string;
    }) => Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteCategory: (id: string) => Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
};
//# sourceMappingURL=category.service.d.ts.map