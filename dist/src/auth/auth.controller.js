import { AuthService } from "./auth.service.js";
const register = async (req, res) => {
    const result = await AuthService.registerUser(req.body);
    res.status(201).json({
        success: true,
        message: "User registered successfully",
        data: result
    });
};
const login = async (req, res) => {
    const result = await AuthService.loginUser(req.body);
    res.json({
        success: true,
        message: "Login successful",
        data: result
    });
};
const getMe = async (req, res) => {
    const result = await AuthService.getMe(req.user.id);
    res.json({
        success: true,
        message: "Current user fetched successfully",
        data: result
    });
};
export const AuthController = {
    register,
    login,
    getMe
};
//# sourceMappingURL=auth.controller.js.map