import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";


export const validateRequest =
  (schema: ZodSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse({
      body: req.body,
      params: req.params,
      query: req.query,
    });

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errorDetails: result.error.issues,
      });
    }

    next();
  };