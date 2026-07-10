import { Request, Response, NextFunction } from "express";

const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const statusCode = error.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: error.message || "Something went wrong",
    error: error,
  });
};

export default globalErrorHandler;