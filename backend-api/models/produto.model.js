import { pool } from "../database.js";

export const ProdutoModel = {
    // GET
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

    // POST
    async criarProdutoNovo(dadosProdutoNovo) {
        const { produto, categoria, quantidade } = dadosProdutoNovo;
        await pool.query(
            "INSERT INTO produtos (produto, categoria, quantidade) VALUES (?, ?, ?)",
            [produto, categoria, quantidade]
        );
    },

    // PUT
    async atualizarProduto(idProduto, dadosProduto) {
        const { produto, categoria, quantidade } = dadosProduto;
        await pool.query(
            "UPDATE produtos SET produto=?, categoria=?, quantidade=? WHERE id=?",
            [produto, categoria, quantidade, idProduto]
        );

        const [produtoAt] = await pool.query(
            "SELECT * FROM produtos WHERE id = ?",
            [idProduto]
        );
        return produtoAt[0];
    },
};
