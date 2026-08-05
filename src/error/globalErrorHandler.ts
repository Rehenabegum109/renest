import { NextFunction, Request, Response } from "express";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
console.log(err);
  res.status(statusCode).json({
    success: false,
    message: err.message || "Something went wrong",
    errorDetails: err.errors || err,
  });
};

export default globalErrorHandler;