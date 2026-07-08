import dotenv from "dotenv";

dotenv.config();

const config = {
    port: process.env.PORT || 5000,

    database_url: process.env.DATABASE_URL,

    jwt_secret: process.env.JWT_SECRET as string,

    jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN || "7d",

    bcrypt_salt_rounds: Number(process.env.BCRYPT_SALT_ROUNDS) || 10,

    // stripe_secret_key: process.env.STRIPE_SECRET_KEY,

    // stripe_webhook_secret: process.env.STRIPE_WEBHOOK_SECRET,
};

export default config;