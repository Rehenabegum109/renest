export declare const CategoryService: {
    createCategory: (payload: {
        name: string;
        description?: string;
    }) => Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
    }>;
    getAllCategories: () => Promise<({
        properties: {
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
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
    })[]>;
    getSingleCategory: (id: string) => Promise<{
        properties: {
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
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
    }>;
    updateCategory: (id: string, payload: {
        name?: string;
        description?: string;
    }) => Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
    }>;
    deleteCategory: (id: string) => Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
    }>;
};
//# sourceMappingURL=category.service.d.ts.map