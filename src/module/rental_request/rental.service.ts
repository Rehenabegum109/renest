
import { RentalStatus } from "../../../generated/prisma/index.js";
import { prisma } from "../../lib/prisma.js";

const createRentalRequest = async (
  payload: any,
  tenantId: string
) => {
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
const getMyRentalRequests = async (tenantId: string) => {
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

const getRentalById = async (id: string) => {
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

const getLandlordRequests = async (landlordId: string) => {
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

const updateRentalStatus = async (
  id: string,
  status: RentalStatus
) => {
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