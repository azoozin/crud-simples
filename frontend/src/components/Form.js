import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";

const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
`;

const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    width: 120px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`;

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2
    color: white;
    height: 42px
`;

const Label = styled.label``;

const Form = ({ getProdutos, onEdit, setOnEdit }) => {
    const ref = useRef();

    useEffect(() => {
        if (onEdit && ref.current) {
            ref.current["nome-produto"].value = onEdit.produto;
            ref.current["categoria-produto"].value = onEdit.categoria;
            ref.current["quantidade-produto"].value = onEdit.quantidade;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!ref.current) return;

        const form = ref.current;
        const produto = form["nome-produto"].value;
        const categoria = form["categoria-produto"].value;
        const quantidade = form["quantidade-produto"].value;

        if (!produto || !categoria || !quantidade) {
            alert("Por favor, informe todos os dados do produto.");
            return;
        }

        try {
            if (onEdit) {
                await axios.put(`http://localhost:3001/produtos/${onEdit.id}`, {
                    produto,
                    categoria,
                    quantidade,
                });
                alert("Produto atualizado.");
            } else {
                await axios.post("http://localhost:3001/produtos", {
                    produto,
                    categoria,
                    quantidade,
                });
                alert("Produto adicionado.");
            }

            form.reset();
            setOnEdit(null);
            getProdutos();
        } catch (error) {
            console.error("Erro:", error);
            alert("Ocorreu um erro, tente novamente.");
        }
    };

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>Produto</Label>
                <Input name="nome-produto" />
            </InputArea>
            <InputArea>
                <Label>Categoria</Label>
                <Input name="categoria-produto" />
            </InputArea>
            <InputArea>
                <Label>Quantidade</Label>
                <Input name="quantidade-produto" />
            </InputArea>
            <Button type="submit">Salvar</Button>
        </FormContainer>
    );
};

export default Form;
