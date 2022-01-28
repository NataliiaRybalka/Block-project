import { config } from 'dotenv';
config();

export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
export const LOCALHOST = process.env.LOCALHOST;
export const PORT = process.env.PORT;
