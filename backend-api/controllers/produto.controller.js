import { ProdutoModel } from "../models/produto.model.js";

// GET
export const listaDeProdutos = async (req, res) => {
    try {
        const produtos = await ProdutoModel.buscarTodosProdutos();
        res.json(produtos);
    } catch (error) {
        res.status(500).json({
            message: "Erro ao buscar lista de produtos.",
            error: error.message,
        });
    }
};

export const listaDeProdutosPorId = async (req, res) => {
    try {
        const produto = await ProdutoModel.buscarProdutoPorId(req.params.id);
        if (!produto) {
            return res
                .status(404)
                .json({ message: "O Produto com esse id não foi encontrado." });
        }
        res.json(produto);
    } catch (error) {
        res.status(500).json({
            message: "Erro ao buscar produto.",
            error: error.message,
        });
    }
};

const ProdutoController = {
    listaDeProdutos,
    listaDeProdutosPorId,
};

export default ProdutoController;
