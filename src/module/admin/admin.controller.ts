import { Request, Response } from "express";
import { AdminService } from "./admin.service.js";


const getDashboardStats = async (
  req: Request,
  res: Response
) => {
  const result = await AdminService.getDashboardStats();

  res.status(200).json({
    success: true,
    message: "Dashboard stats fetched successfully",
    data: result,
  });
};



const getAllUsers = async (req: Request, res: Response) => {
  const result = await AdminService.getAllUsers();

  res.status(200).json({
    success: true,
    message: "Users fetched successfully",
    data: result,
  });
};

const updateUserStatus = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
  return res.status(400).json({
    success:false,
    message:"Admin ID required"
  });
}
  const { status } = req.body;

  const result = await AdminService.updateUserStatus(id, status);

  res.status(200).json({
    success: true,
    message: "User status updated successfully",
    data: result,
  });
};

const getAllProperties = async (req: Request, res: Response) => {
  const result = await AdminService.getAllProperties();

  res.status(200).json({
    success: true,
    message: "Properties fetched successfully",
    data: result,
  });
};

const getAllRentalRequests = async (req: Request, res: Response) => {
  const result = await AdminService.getAllRentalRequests();

  res.status(200).json({
    success: true,
    message: "Rental requests fetched successfully",
    data: result,
  });
};
const deleteProperty = async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await AdminService.deleteProperty(id);

  res.status(200).json({
    success: true,
    message: "Property deleted successfully",
    data: result,
  });
};
export const AdminController = {
  getAllUsers,
  updateUserStatus,
  getAllProperties,
  getAllRentalRequests,
  getDashboardStats,
  deleteProperty,
};