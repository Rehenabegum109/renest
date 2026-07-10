import { prisma } from "../../lib/prisma.js";
const createRentalRequest = async (payload, tenantId) => {
    const property = await prisma.property.findUniqueOrThrow({
        where: {
            id: payload.propertyId,
        },
    });
    if (!property.isAvailable) {
        throw new Error("Property is not available");
    }
    const rental = await prisma.rentalRequest.create({
        data: {
            message: payload.message,
            tenant: {
                connect: {
                    id: tenantId,
                },
            },
            property: {
                connect: {
                    id: payload.propertyId,
                },
            },
        },
        include: {
            tenant: true,
            property: true,
        },
    });
    return rental;
};
const getMyRentalRequests = async (tenantId) => {
    return await prisma.rentalRequest.findMany({
        where: {
            tenantId,
        },
        include: {
            property: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
};
const getRentalById = async (id) => {
    return await prisma.rentalRequest.findUniqueOrThrow({
        where: {
            id,
        },
        include: {
            tenant: true,
            property: true,
            payments: true,
        },
    });
};
const getLandlordRequests = async (landlordId) => {
    return await prisma.rentalRequest.findMany({
        where: {
            property: {
                landlordId,
            },
        },
        include: {
            tenant: true,
            property: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
};
const updateRentalStatus = async (id, status) => {
    return await prisma.rentalRequest.update({
        where: {
            id,
        },
        data: {
            status,
        },
    });
};
export const RentalService = {
    createRentalRequest,
    getMyRentalRequests,
    getRentalById,
    getLandlordRequests,
    updateRentalStatus,
};
//# sourceMappingURL=rental.service.js.map