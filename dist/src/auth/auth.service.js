import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config/index.js";
import { prisma } from "../lib/prisma.js";
const registerUser = async (payload) => {
    const { name, email, password, role } = payload;
    const existingUser = await prisma.user.findUnique({
        where: {
            email
        }
    });
    if (existingUser) {
        throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            role
        }
    });
    return user;
};
const loginUser = async (payload) => {
    const { email, password } = payload;
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    });
    if (!user) {
        throw new Error("Invalid credentials");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Invalid credentials");
    }
    const token = jwt.sign({
        id: user.id,
        role: user.role
    }, config.jwt_secret, {
        expiresIn: "7d"
    });
    return {
        token,
        user
    };
};
const getMe = async (userId) => {
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            status: true,
            createdAt: true
        }
    });
    if (!user) {
        throw new Error("User not found");
    }
    return user;
};
export const AuthService = {
    registerUser,
    loginUser,
    getMe
};
//# sourceMappingURL=auth.service.js.map