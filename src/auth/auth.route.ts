import { Router } from "express";
import { AuthController } from "./auth.controller";
import { auth } from "../middleware/auth";
import { validateRequest } from "../middleware/validateRequest";
import { AuthValidation } from "./auth.validation";


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