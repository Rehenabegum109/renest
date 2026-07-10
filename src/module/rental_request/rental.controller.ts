import httpStatus from "http-status";
import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { RentalService } from "./rental.service";

const createRentalRequest = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const result = await RentalService.createRentalRequest(
      req.body,
      req.user.id
    );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "Rental request submitted successfully",
      data: result,
    });
  }
);

const getMyRentalRequests = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const result = await RentalService.getMyRentalRequests(req.user.id);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Rental requests retrieved successfully",
      data: result,
    });
  }
);

const getRentalById = catchAsync(
  async (req: Request, res: Response) => {
    const result = await RentalService.getRentalById(req.params.id);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Rental request retrieved successfully",
      data: result,
    });
  }
);

const getLandlordRequests = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const result = await RentalService.getLandlordRequests(req.user.id);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Landlord rental requests retrieved successfully",
      data: result,
    });
  }
);

const updateRentalStatus = catchAsync(
  async (req: Request, res: Response) => {
    const result = await RentalService.updateRentalStatus(
      req.params.id,
      req.body.status
    );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Rental status updated successfully",
      data: result,
    });
  }
);

export const RentalController = {
  createRentalRequest,
  getMyRentalRequests,
  getRentalById,
  getLandlordRequests,
  updateRentalStatus,
};