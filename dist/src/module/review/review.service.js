import { prisma } from "../../lib/prisma.js";
const createReview = async (payload, tenantId) => {
    const review = await prisma.review.create({
        data: {
            propertyId: payload.propertyId,
            tenantId,
            rating: payload.rating,
            comment: payload.comment
        }
    });
    return review;
};
const getPropertyReviews = async (propertyId) => {
    return prisma.review.findMany({
        where: {
            propertyId
        },
        include: {
            tenant: {
                select: {
                    name: true,
                    profileImage: true
                }
            }
        },
        orderBy: {
            createdAt: "desc"
        }
    });
};
export const ReviewService = {
    createReview,
    getPropertyReviews
};
//# sourceMappingURL=review.service.js.map