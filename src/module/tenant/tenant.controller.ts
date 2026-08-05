import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";
import { TenantService } from "./tenant.service.js";

const getDashboardStats = catchAsync(async (req: any, res) => {
  const result = await TenantService.getDashboardStats(
    req.user.id
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Tenant dashboard retrieved successfully",
    data: result,
  });
});

export const TenantController = {
  getDashboardStats,
};