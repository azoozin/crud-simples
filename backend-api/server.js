import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { pool } from "./database.js";

dotenv.config();

const app = express();
const PORT = process.envPORT || 3000;

app.use(express.json());
app.use(cors());

// ******************************************************
pool.getConnection()
    .then((connection) => {
        console.log("Conectado a database com sucesso.");
        connection.release();
    })
    .catch((err) => {
        console.error("Falha a conectar a database:", err);
    });

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
