import { prisma } from "../../lib/prisma.js";
export declare const PropertyService: {
    createProperty: (payload: any, landlordId: string) => Promise<any>;
    getAllProperties: (query: any) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: any;
        };
        data: any;
    }>;
    getPropertyById: (id: string) => Promise<any>;
    updateProperty: (id: string, payload: typeof prisma.property.update) => Promise<any>;
    deleteProperty: (id: string) => Promise<any>;
};
//# sourceMappingURL=property.service.d.ts.map