import { ClienteModel } from "../models/cliente.model.js";

// GET
export const listaDeClientes = async (req, res) => {
    try {
        const clientes = await ClienteModel.buscarTodosClientes();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({
            message: "Erro ao buscar lista de clientes",
            error: error.message,
        });
    }
};

export const listaDeClientesPorId = async (req, res) => {
    try {
        const cliente = await ClienteModel.buscarClientePorId(req.params.id);
        if (!cliente) {
            return res
                .status(404)
                .json({ message: "Cliente com esse id não foi encontrado." });
        }
        res.json(cliente);
    } catch (error) {
        res.status(500).json({
            message: "Erro ao buscar cliente.",
            error: error.message,
        });
    }
};

// POST
export const criarCliente = async (req, res) => {
    try {
        // validar os dados do cliente, assumindo que os tres sao obrigatorios
        if (!req.body.nome || !req.body.email || !req.body.telefone) {
            return res.status(400).json({
                message:
                    "Nome, email e telefone são necessários para criar cliente.",
            });
        }

        const clienteNovo = await ClienteModel.criarClienteNovo(req.body);
        res.status(200).json(clienteNovo);
    } catch (error) {
        res.status(500).json({
            message: "Erro ao criar cliente.",
            error: error.message,
        });
    }
};

// PUT
export const atualizarCliente = async (req, res) => {
    try {
        const clienteAtualizado = await ClienteModel.atualizarCliente(
            req.params.id,
            req.body
        );
        res.json(clienteAtualizado);
    } catch (error) {
        res.status(500).json({
            message: "Erro ao tentar atualizar cliente.",
            error: error.message,
        });
    }
};

// DELETE
export const removerCliente = async (req, res) => {
    try {
        // validar id valido
        if (isNaN(req.params.id)) {
            return res.status(400).json({ message: "ID inválido." });
        }

        const removido = await ClienteModel.removerCliente(req.params.id);

        if (!removido) {
            return res
                .status(404)
                .json({ message: "Cliente a ser removido não encontrado." });
        }

        res.status(204).end();
    } catch (error) {
        res.status(500).json({
            message: "Erro ao tentar remover cliente.",
            error: error.message,
        });
    }
};

const ClienteController = {
    listaDeClientes,
    listaDeClientesPorId,
    criarCliente,
    atualizarCliente,
    removerCliente,
};

export default ClienteController;
