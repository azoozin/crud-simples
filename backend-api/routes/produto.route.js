import express from "express";
import ProdutoController from "../controllers/produto.controller.js";

const produtoRouter = express.Router();

produtoRouter.get("/", ProdutoController.listaDeProdutos);
produtoRouter.get("/:id", ProdutoController.listaDeProdutosPorId);

export default produtoRouter;
