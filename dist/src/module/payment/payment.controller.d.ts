import { Request, Response } from "express";
export declare const PaymentController: {
    createCheckoutSession: (req: Request, res: Response, next: import("express").NextFunction) => void;
    getMyPayments: (req: Request, res: Response, next: import("express").NextFunction) => void;
    getPaymentById: (req: Request, res: Response, next: import("express").NextFunction) => void;
    stripeWebhook: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=payment.controller.d.ts.map