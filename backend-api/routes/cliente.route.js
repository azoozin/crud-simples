import express from "express";
import ClienteController from "../controllers/cliente.controller.js";

const clienteRouter = express.Router();

clienteRouter.get("/", ClienteController.listaDeClientes);
clienteRouter.get("/:id", ClienteController.listaDeClientesPorId);
clienteRouter.post("/", ClienteController.criarCliente);
clienteRouter.put("/:id", ClienteController.atualizarCliente);
clienteRouter.delete("/:id", ClienteController.removerCliente);

export default clienteRouter;
