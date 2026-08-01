// import { Request, Response } from "express";
// import { AuthService } from "./auth.service.js";
import { AuthService } from "./auth.service.js";
const register = async (req, res, next) => {
    try {
        const result = await AuthService.registerUser(req.body);
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const login = async (req, res, next) => {
    try {
        const result = await AuthService.loginUser(req.body);
        res.status(200).json({
            success: true,
            message: "Login successful",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const getMe = async (req, res, next) => {
    try {
        const result = await AuthService.getMe(req.user.id);
        res.status(200).json({
            success: true,
            message: "Current user fetched successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
export const AuthController = {
    register,
    login,
    getMe,
};
//# sourceMappingURL=auth.controller.js.map