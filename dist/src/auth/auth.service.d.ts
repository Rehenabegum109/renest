export declare const AuthService: {
    registerUser: (payload: any) => Promise<{
        token: string;
        user: {
            id: string;
            role: import("../../generated/prisma/index.js").$Enums.Role;
            name: string;
            email: string;
            password: string;
            phone: string | null;
            status: import("../../generated/prisma/index.js").$Enums.UserStatus;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    loginUser: (payload: any) => Promise<{
        token: string;
        user: {
            id: string;
            role: import("../../generated/prisma/index.js").$Enums.Role;
            name: string;
            email: string;
            password: string;
            phone: string | null;
            status: import("../../generated/prisma/index.js").$Enums.UserStatus;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    getMe: (userId: string) => Promise<{
        id: string;
        role: import("../../generated/prisma/index.js").$Enums.Role;
        name: string;
        email: string;
        status: import("../../generated/prisma/index.js").$Enums.UserStatus;
        createdAt: Date;
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map