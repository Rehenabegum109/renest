import { Prisma, RentalStatus } from "@prisma/client";
import { prisma } from "../../lib/prisma";

const createRentalRequest = async (
  payload: Prisma.RentalRequestCreateInput,
  tenantId: string
) => {
  // Property exists?
  const property = await prisma.property.findUniqueOrThrow({
    where: {
      id: payload.property.connect?.id as string,
    },
  });

  // Property available?
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
      property: payload.property,
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