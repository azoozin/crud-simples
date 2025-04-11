import express from "express";
import ProdutoController from "../controllers/produto.controller.js";

const produtoRouter = express.Router();

produtoRouter.get("/", ProdutoController.listaDeProdutos);
produtoRouter.get("/:id", ProdutoController.listaDeProdutosPorId);
produtoRouter.post("/", ProdutoController.criarProduto);
produtoRouter.put("/:id", ProdutoController.atualizarProduto);
produtoRouter.delete("/:id", ProdutoController.removerProduto);

export default produtoRouter;
