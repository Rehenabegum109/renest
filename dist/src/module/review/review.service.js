import { prisma } from "../../lib/prisma.js";
const createReview = async (payload, userId) => {
    return prisma.review.create({
        data: {
            propertyId: payload.propertyId,
            userId,
            rating: payload.rating,
            comment: payload.comment,
        },
    });
};
const getPropertyReviews = async (propertyId) => {
    return prisma.review.findMany({
        where: {
            propertyId,
        },
        include: {
            user: {
                select: {
                    name: true,
                },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    });
};
export const ReviewService = {
    createReview,
    getPropertyReviews
};
//# sourceMappingURL=review.service.js.map