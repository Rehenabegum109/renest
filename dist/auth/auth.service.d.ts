export declare const AuthService: {
    registerUser: (payload: any) => Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
        phone: string | null;
        profileImage: string | null;
        role: import("../../generated/prisma").$Enums.Role;
        status: import("../../generated/prisma").$Enums.UserStatus;
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
            profileImage: string | null;
            role: import("../../generated/prisma").$Enums.Role;
            status: import("../../generated/prisma").$Enums.UserStatus;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    getMe: (userId: string) => Promise<{
        id: string;
        name: string;
        email: string;
        role: import("../../generated/prisma").$Enums.Role;
        status: import("../../generated/prisma").$Enums.UserStatus;
        createdAt: Date;
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map