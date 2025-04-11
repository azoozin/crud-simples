import dotenv from "dotenv";
import { createPool } from "mysql2/promise";

dotenv.config();

const pool = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    connectionLimit: 10,
});

export { pool };
