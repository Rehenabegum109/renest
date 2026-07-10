import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { RentalService } from "./rental.service";
const createRentalRequest = catchAsync(async (req, res) => {
    const result = await RentalService.createRentalRequest(req.body, req.user.id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Rental request submitted successfully",
        data: result,
    });
});
const getMyRentalRequests = catchAsync(async (req, res) => {
    const result = await RentalService.getMyRentalRequests(req.user.id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Rental requests retrieved successfully",
        data: result,
    });
});
const getRentalById = catchAsync(async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            success: false,
            message: "Rental ID is required",
        });
    }
    const result = await RentalService.getRentalById(id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Rental request retrieved successfully",
        data: result,
    });
});
const getLandlordRequests = catchAsync(async (req, res) => {
    const result = await RentalService.getLandlordRequests(req.user.id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Landlord rental requests retrieved successfully",
        data: result,
    });
});
const updateRentalStatus = catchAsync(async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            success: false,
            message: "Rental ID is required",
        });
    }
    const result = await RentalService.updateRentalStatus(id, req.body.status);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Rental status updated successfully",
        data: result,
    });
});
export const RentalController = {
    createRentalRequest,
    getMyRentalRequests,
    getRentalById,
    getLandlordRequests,
    updateRentalStatus,
};
//# sourceMappingURL=rental.controller.js.map