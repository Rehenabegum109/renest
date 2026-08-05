import { prisma } from "../../lib/prisma.js";
import {
  RentalStatus,
  PaymentStatus,
} from "../../../generated/prisma/index.js";

const getDashboardStats = async (landlordId: string) => {
  const totalProperties = await prisma.property.count({
    where: {
      landlordId,
    },
  });

  const pendingRequests = await prisma.rentalRequest.count({
    where: {
      property: {
        landlordId,
      },
      status: RentalStatus.PENDING,
    },
  });

  const approvedRequests = await prisma.rentalRequest.count({
    where: {
      property: {
        landlordId,
      },
      status: RentalStatus.APPROVED,
    },
  });

  const earnings = await prisma.payment.aggregate({
    where: {
      status: PaymentStatus.COMPLETED,
      rentalRequest: {
        property: {
          landlordId,
        },
      },
    },
    _sum: {
      amount: true,
    },
  });

  return {
    totalProperties,
    pendingRequests,
    approvedRequests,
    totalEarnings: earnings._sum.amount || 0,
  };
};

export const LandlordService = {
  getDashboardStats,
};