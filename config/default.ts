import * as dotenv from 'dotenv';
dotenv.config()

export default{
    environment : process.env.NODE_ENV ?? '',
    port : process.env.PORT ?? '',
    corsurl : process.env.CORS_URL ?? '',
    db_uri : process.env.DB_URI ?? '',
    saltfactor : process.env.SALT_FACTOR ?? 0,
    accessPrivateKey : process.env.ACCESS_TOKEN_PRIVATE_KEY ?? '',
    refreshPrivateKey : process.env.REFRESH_TOKEN_PRIVATE_KEY ?? '',
    accessPublicKey : process.env.ACCESS_TOKEN_PUBLIC_KEY ?? '',
    refreshPublicKey : process.env.ACCESS_TOKEN_PRIVATE_KEY ?? '',
    accessTokenTtl : process.env.ACCESS_TOKEN_TTL ?? '',
    refreshTokenTtl : process.env.REFRESH_TOKEN_TTL ?? ''
}