export declare const AuthService: {
    registerUser: (payload: any) => Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
        phone: string | null;
        role: import("../../generated/prisma/index.js").$Enums.Role;
        status: import("../../generated/prisma/index.js").$Enums.UserStatus;
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
            phone: string | null;
            role: import("../../generated/prisma/index.js").$Enums.Role;
            status: import("../../generated/prisma/index.js").$Enums.UserStatus;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    getMe: (userId: string) => Promise<{
        id: string;
        name: string;
        email: string;
        role: import("../../generated/prisma/index.js").$Enums.Role;
        createdAt: Date;
        activeStatus: never;
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map