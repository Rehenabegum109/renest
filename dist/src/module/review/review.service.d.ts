export declare const ReviewService: {
    createReview: (payload: any, userId: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        propertyId: string;
        userId: string;
        rating: number;
        comment: string;
    }>;
    getPropertyReviews: (propertyId: string) => Promise<({
        user: {
            name: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        propertyId: string;
        userId: string;
        rating: number;
        comment: string;
    })[]>;
};
//# sourceMappingURL=review.service.d.ts.map