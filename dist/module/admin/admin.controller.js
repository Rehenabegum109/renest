import { AdminService } from "./admin.service";
const getAllUsers = async (req, res) => {
    const result = await AdminService.getAllUsers();
    res.status(200).json({
        success: true,
        message: "Users fetched successfully",
        data: result,
    });
};
const updateUserStatus = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            success: false,
            message: "Admin ID required"
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
const getAllProperties = async (req, res) => {
    const result = await AdminService.getAllProperties();
    res.status(200).json({
        success: true,
        message: "Properties fetched successfully",
        data: result,
    });
};
const getAllRentalRequests = async (req, res) => {
    const result = await AdminService.getAllRentalRequests();
    res.status(200).json({
        success: true,
        message: "Rental requests fetched successfully",
        data: result,
    });
};
export const AdminController = {
    getAllUsers,
    updateUserStatus,
    getAllProperties,
    getAllRentalRequests,
};
//# sourceMappingURL=admin.controller.js.map