export declare const AuthService: {
    registerUser: (payload: any) => Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
        activeStatus: import("../../generated/prisma/index.js").$Enums.ActiveStatus;
        role: import("../../generated/prisma/index.js").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
    loginUser: (payload: any) => Promise<{
        token: string;
        user: {
            id: string;
            name: string;
            email: string;
            password: string;
            activeStatus: import("../../generated/prisma/index.js").$Enums.ActiveStatus;
            role: import("../../generated/prisma/index.js").$Enums.Role;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    getMe: (userId: string) => Promise<{
        id: string;
        name: string;
        email: string;
        activeStatus: import("../../generated/prisma/index.js").$Enums.ActiveStatus;
        role: import("../../generated/prisma/index.js").$Enums.Role;
        createdAt: Date;
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map