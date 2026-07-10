import Stripe from "stripe";
declare const config: {
    port: string | number;
    database_url: string | undefined;
    jwt_secret: string;
    jwt_access_expires_in: string;
    bcrypt_salt_rounds: number;
    stripe_webhook_secret: string | undefined;
};
export declare const stripe: Stripe;
export default config;
//# sourceMappingURL=index.d.ts.map