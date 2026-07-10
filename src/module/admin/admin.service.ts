import { prisma } from "../../lib/prisma.js";

const getAllUsers = async () => {
  return await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      profileImage: true,
      role: true,
      status: true,
      createdAt: true,
    },
  });
};

const updateUserStatus = async (
  id: string,
  status: "ACTIVE" | "BLOCKED"
) => {
  return await prisma.user.update({
    where: {
      id,
    },
    data: {
      status,
    },
  });
};

const getAllProperties = async () => {
  return await prisma.property.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      landlord: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      category: true,
      reviews: true,
    },
  });
};

const getAllRentalRequests = async () => {
  return await prisma.rentalRequest.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      tenant: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      property: {
        select: {
          id: true,
          title: true,
          location: true,
          rentPrice: true,
        },
      },
      payments: true,
    },
  });
};

export const AdminService = {
  getAllUsers,
  updateUserStatus,
  getAllProperties,
  getAllRentalRequests,
};