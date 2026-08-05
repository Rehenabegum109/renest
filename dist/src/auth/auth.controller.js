// import { Request, Response } from "express";
// import { AuthService } from "./auth.service.js";
import { AuthService } from "./auth.service.js";
const register = async (req, res, next) => {
    try {
        const result = await AuthService.registerUser(req.body);
        res.cookie("accessToken", result.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: result.user,
        });
    }
    catch (error) {
        next(error);
    }
};
const login = async (req, res, next) => {
    try {
        const result = await AuthService.loginUser(req.body);
        res.cookie("accessToken", result.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        res.status(200).json({
            success: true,
            message: "Login successful",
            data: result.user,
        });
    }
    catch (error) {
        next(error);
    }
};
const getMe = async (req, res, next) => {
    try {
        console.log("req.user:", req.user);
        const result = await AuthService.getMe(req.user.id);
        res.status(200).json({
            success: true,
            message: "Current user fetched successfully",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
};
const logout = async (req, res, next) => {
    try {
        res.clearCookie("accessToken", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
        });
        res.status(200).json({
            success: true,
            message: "Logout successful",
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
    logout
};
//# sourceMappingURL=auth.controller.js.map