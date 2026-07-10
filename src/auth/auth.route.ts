import { Router } from "express";
import { AuthController } from "./auth.controller.js";
import { auth } from "../middleware/auth.js";
import { validateRequest } from "../middleware/validateRequest.js";
import { AuthValidation } from "./auth.validation.js";


const router = Router();

router.post(
  "/register",
  validateRequest(AuthValidation.registerValidation),
  AuthController.register
);

router.post(
  "/login",
  validateRequest(AuthValidation.loginValidation),
  AuthController.login
);

router.get(
  "/me",
  auth(),
  AuthController.getMe
);

export const AuthRoutes = router;