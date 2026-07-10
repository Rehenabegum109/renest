export declare const AuthService: {
    registerUser: (payload: any) => Promise<any>;
    loginUser: (payload: any) => Promise<{
        token: string;
        user: any;
    }>;
    getMe: (userId: string) => Promise<any>;
};
//# sourceMappingURL=auth.service.d.ts.map