export declare const CategoryService: {
    createCategory: (payload: {
        name: string;
        description?: string;
    }) => Promise<any>;
    getAllCategories: () => Promise<any>;
    getSingleCategory: (id: string) => Promise<any>;
    updateCategory: (id: string, payload: {
        name?: string;
        description?: string;
    }) => Promise<any>;
    deleteCategory: (id: string) => Promise<any>;
};
//# sourceMappingURL=category.service.d.ts.map