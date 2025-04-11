import { pool } from "../database.js";

export const ClienteModel = {
    async buscarTodosClientes() {
        const [rows] = await pool.query("SELECT * FROM clientes");
        return rows;
    },

    async buscarClientePorId(idCliente) {
        const [rows] = await pool.query("SELECT * FROM clientes WHERE id=?", [
            idCliente,
        ]);
        return rows[0];
    },

    async criarClienteNovo(dadosClienteNovo) {
        const { nome, email, telefone } = dadosClienteNovo;
        await pool.query(
            "INSERT INTO clientes (nome, email, telefone) VALUES (?, ?, ?)",
            [nome, email, telefone]
        );
    },

    async atualizarCliente(idCliente, dadosCliente) {
        const { nome, email, telefone } = dadosCliente;
        await pool.query(
            "UPDATE clientes SET nome=?, email=?, telefone=? WHERE id=?",
            [nome, email, telefone, idCliente]
        );

        const [cliente] = await pool.query(
            "SELECT * FROM clientes WHERE id = ?",
            [idCliente]
        );
        return cliente[0];
    },

    async removerCliente(idCliente) {
        const [result] = await pool.query("DELETE FROM clientes WHERE id = ?", [
            idCliente,
        ]);
        return result.affectedRows > 0; // retorna true/false
    },
};
