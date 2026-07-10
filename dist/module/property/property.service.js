import { prisma } from "../../lib/prisma";
const createProperty = async (payload, landlordId) => {
    const property = await prisma.property.create({
        data: {
            title: payload.title,
            description: payload.description,
            location: payload.location,
            rentPrice: payload.rentPrice,
            bedrooms: payload.bedrooms,
            bathrooms: payload.bathrooms,
            landlord: {
                connect: {
                    id: landlordId
                }
            },
            category: {
                connect: {
                    id: payload.categoryId
                }
            }
        },
        include: {
            landlord: true,
            category: true
        }
    });
    return property;
};
const getAllProperties = async (query) => {
    const { searchTerm, location, categoryId, isAvailable, minPrice, maxPrice, page = 1, limit = 10, sortBy = "createdAt", sortOrder = "desc", } = query;
    const where = {};
    if (searchTerm) {
        where.OR = [
            {
                title: {
                    contains: searchTerm,
                    mode: "insensitive",
                },
            },
            {
                location: {
                    contains: searchTerm,
                    mode: "insensitive",
                },
            },
        ];
    }
    if (location) {
        where.location = {
            contains: location,
            mode: "insensitive",
        };
    }
    if (categoryId) {
        where.categoryId = categoryId;
    }
    if (isAvailable !== undefined) {
        where.isAvailable = isAvailable === "true";
    }
    if (minPrice || maxPrice) {
        where.rentPrice = {};
        if (minPrice) {
            where.rentPrice.gte = Number(minPrice);
        }
        if (maxPrice) {
            where.rentPrice.lte = Number(maxPrice);
        }
    }
    const skip = (Number(page) - 1) * Number(limit);
    const result = await prisma.property.findMany({
        where,
        skip,
        take: Number(limit),
        orderBy: {
            [sortBy]: sortOrder,
        },
        include: {
            landlord: true,
            category: true,
        },
    });
    const total = await prisma.property.count({
        where,
    });
    return {
        meta: {
            page: Number(page),
            limit: Number(limit),
            total,
        },
        data: result,
    };
};
const getPropertyById = async (id) => {
    return await prisma.property.findUniqueOrThrow({
        where: {
            id,
        },
        include: {
            landlord: true,
            category: true,
            reviews: true,
        },
    });
};
const updateProperty = async (id, payload) => {
    return await prisma.property.update({
        where: {
            id,
        },
        data: payload,
        include: {
            landlord: true,
            category: true,
        },
    });
};
const deleteProperty = async (id) => {
    // delete reviews first
    await prisma.review.deleteMany({
        where: {
            propertyId: id,
        },
    });
    await prisma.rentalRequest.deleteMany({
        where: {
            propertyId: id,
        },
    });
    return await prisma.property.delete({
        where: {
            id,
        },
    });
};
export const PropertyService = {
    createProperty,
    getAllProperties,
    getPropertyById,
    updateProperty,
    deleteProperty,
};
//# sourceMappingURL=property.service.js.map