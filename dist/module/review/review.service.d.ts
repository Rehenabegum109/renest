export declare const ReviewService: {
    createReview: (payload: any, tenantId: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        propertyId: string;
        rating: number;
        comment: string | null;
    }>;
    getPropertyReviews: (propertyId: string) => Promise<({
        tenant: {
            name: string;
            profileImage: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string;
        propertyId: string;
        rating: number;
        comment: string | null;
    })[]>;
};
//# sourceMappingURL=review.service.d.ts.map