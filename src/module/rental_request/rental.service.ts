

// import { PropertyStatus, RentalStatus } from "../../../generated/prisma/index.js";
import { prisma } from "../../lib/prisma.js";
import { PropertyStatus, RentalStatus } from "@prisma/client";
const createRentalRequest = async (
  payload: {
    propertyId: string;
    moveInDate: string;
  },
  tenantId: string
) => {
  // Check property exists
  const property = await prisma.property.findUnique({
    where: {
      id: payload.propertyId,
    },
  });

  if (!property) {
    throw new Error("Property not found");
  }

 if (property.status !== PropertyStatus.AVAILABLE) {
  throw new Error("Property is not available");
}

  // Prevent duplicate request
  const existingRequest = await prisma.rentalRequest.findFirst({
    where: {
      tenantId,
      propertyId: payload.propertyId,
    },
  });

  if (existingRequest) {
    throw new Error("You have already requested this property.");
  }

  // Create rental request
  const rental = await prisma.rentalRequest.create({
    data: {
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
      moveInDate: new Date(payload.moveInDate),
      status: RentalStatus.PENDING,
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
      payment: true,
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