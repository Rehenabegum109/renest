import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";
import { LandlordService } from "./landlord.service.js";

const getDashboardStats = catchAsync(async (req: any, res) => {
  const result = await LandlordService.getDashboardStats(req.user.id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Dashboard statistics retrieved successfully",
    data: result,
  });
});

export const LandlordController = {
  getDashboardStats,
};