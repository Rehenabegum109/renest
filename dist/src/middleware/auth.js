import jwt from "jsonwebtoken";
import config from "../config/index.js";
export const auth = (...roles) => (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized access",
            });
        }
        const token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token missing",
            });
        }
        const decoded = jwt.verify(token, config.jwt_secret);
        req.user = decoded;
        if (roles.length > 0 && !roles.includes(decoded.role)) {
            return res.status(403).json({
                success: false,
                message: "Forbidden",
            });
        }
        next();
    }
    catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token",
        });
    }
};
//# sourceMappingURL=auth.js.map