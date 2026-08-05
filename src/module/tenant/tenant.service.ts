import { PaymentStatus, RentalStatus } from "@prisma/client";
import { prisma } from "../../lib/prisma.js";
// import { RentalStatus, PaymentStatus } from "../../../generated/prisma/index.js";

const getDashboardStats = async (tenantId: string) => {
  const totalRequests = await prisma.rentalRequest.count({
    where: {
      tenantId,
    },
  });

  const approvedRentals = await prisma.rentalRequest.count({
    where: {
      tenantId,
      status: RentalStatus.APPROVED,
    },
  });

  const completedPayments = await prisma.payment.count({
    where: {
      userId: tenantId,
      status: PaymentStatus.COMPLETED,
    },
  });

  const totalPaid = await prisma.payment.aggregate({
    where: {
      userId: tenantId,
      status: PaymentStatus.COMPLETED,
    },
    _sum: {
      amount: true,
    },
  });

  return {
    totalRequests,
    approvedRentals,
    completedPayments,
    totalPaid: totalPaid._sum.amount || 0,
  };
};

export const TenantService = {
  getDashboardStats,
};