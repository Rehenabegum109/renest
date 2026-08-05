import { Request, Response, NextFunction } from "express";
export declare const AuthController: {
    register: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    login: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getMe: (req: any, res: Response, next: NextFunction) => Promise<void>;
    logout: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};
//# sourceMappingURL=auth.controller.d.ts.map