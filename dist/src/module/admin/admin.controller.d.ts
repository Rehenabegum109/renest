import { Request, Response } from "express";
export declare const AdminController: {
    getAllUsers: (req: Request, res: Response) => Promise<void>;
    updateUserStatus: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getAllProperties: (req: Request, res: Response) => Promise<void>;
    getAllRentalRequests: (req: Request, res: Response) => Promise<void>;
    getDashboardStats: (req: Request, res: Response) => Promise<void>;
    deleteProperty: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=admin.controller.d.ts.map