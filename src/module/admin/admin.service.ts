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
          address: true,
          city: true,
          rent: true,
          status: true,
        },
      },


      payment: true,

    },

  });

};

const getDashboardStats = async () => {
  const totalUsers = await prisma.user.count();

  const totalProperties = await prisma.property.count();

  const totalRentals = await prisma.rentalRequest.count();

  const totalPayments = await prisma.payment.count();

  return {
    totalUsers,
    totalProperties,
    totalRentals,
    totalPayments,
  };
};

const deleteProperty = async (id: string) => {
  await prisma.review.deleteMany({
    where: {
      propertyId: id,
    },
  });

  await prisma.payment.deleteMany({
    where: {
      rentalRequest: {
        propertyId: id,
      },
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

export const AdminService = {
  getDashboardStats,
  getAllUsers,
  updateUserStatus,
  getAllProperties,
  getAllRentalRequests,
  deleteProperty,
};