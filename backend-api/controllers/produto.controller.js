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

// POST
export const criarProduto = async (req, res) => {
    try {
        // validar os dados do produto
        // nome do produto e categoria obrigatorios
        // quantidade default 0
        if (!req.body.produto || !req.body.categoria) {
            return res.status(400).json({
                message:
                    "Produto (nome do produto) e categoria são necessários para criar produto.",
            });
        }

        const produtoNovo = await ProdutoModel.criarProdutoNovo(req.body);
        res.status(200).json(produtoNovo);
    } catch (error) {
        res.status(500).json({
            message: "Erro ao criar produto.",
            error: error.message,
        });
    }
};

// PUT
export const atualizarProduto = async (req, res) => {
    try {
        const produtoAtualizado = await ProdutoModel.atualizarProduto(
            req.params.id,
            req.body
        );
        res.json(produtoAtualizado);
    } catch (error) {
        res.status(500).json({
            message: "Erro ao tentar atualizar produto.",
            error: error.message,
        });
    }
};

// DELETE
export const removerProduto = async (req, res) => {
    try {
        if (isNaN(req.params.id)) {
            return res.status(400).json({ message: "ID do produto inválido." });
        }

        const produtoFoiRemovido = await ProdutoModel.removerProduto(
            req.params.id
        );

        if (!produtoFoiRemovido) {
            return res
                .status(404)
                .json({ message: "Produto a ser removido não encontrado." });
        }

        res.status(204).end();
    } catch (error) {
        res.status(500).json({
            message: "Erro ao tentar remover o produto.",
            error: error.message,
        });
    }
};

const ProdutoController = {
    listaDeProdutos,
    listaDeProdutosPorId,
    criarProduto,
    atualizarProduto,
    removerProduto,
};

export default ProdutoController;
