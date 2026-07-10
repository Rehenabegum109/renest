import httpStatus from "http-status";
import { PropertyService } from "./property.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
const createProperty = catchAsync(async (req, res) => {
    const result = await PropertyService.createProperty(req.body, req.user.id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Property created successfully",
        data: result,
    });
});
const getAllProperties = catchAsync(async (req, res) => {
    const result = await PropertyService.getAllProperties(req.query);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Properties retrieved successfully",
        data: result,
    });
});
const getPropertyById = catchAsync(async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            success: false,
            message: "Property ID is required",
        });
    }
    const result = await PropertyService.getPropertyById(id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Property retrieved successfully",
        data: result,
    });
});
const updateProperty = catchAsync(async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            success: false,
            message: "Property ID is required",
        });
    }
    const result = await PropertyService.updateProperty(id, req.body);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Property updated successfully",
        data: result,
    });
});
const deleteProperty = catchAsync(async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            success: false,
            message: "Property ID is required"
        });
    }
    const result = await PropertyService.deleteProperty(id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Property deleted successfully",
        data: result,
    });
});
export const PropertyController = {
    createProperty,
    getAllProperties,
    getPropertyById,
    updateProperty,
    deleteProperty,
};
//# sourceMappingURL=property.controller.js.map