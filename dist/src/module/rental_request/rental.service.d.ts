import { RentalStatus } from "../../../generated/prisma/index.js";
export declare const RentalService: {
    createRentalRequest: (payload: any, tenantId: string) => Promise<any>;
    getMyRentalRequests: (tenantId: string) => Promise<any>;
    getRentalById: (id: string) => Promise<any>;
    getLandlordRequests: (landlordId: string) => Promise<any>;
    updateRentalStatus: (id: string, status: RentalStatus) => Promise<any>;
};
//# sourceMappingURL=rental.service.d.ts.map