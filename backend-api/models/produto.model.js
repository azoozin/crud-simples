import { pool } from "../database.js";

export const ProdutoModel = {
    async buscarTodosProdutos() {
        const [rows] = await pool.query("SELECT * FROM produtos");
        return rows;
    },

    async buscarProdutoPorId(idProduto) {
        const [rows] = await pool.query("SELECT * FROM produtos WHERE id=?", [
            idProduto,
        ]);
        return rows[0];
    },
};
