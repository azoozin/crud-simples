import React, { useRef } from "react";
import styled from "styled-components";

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

const Form = ({ onEdit }) => {
    const ref = useRef();

    return (
        <FormContainer ref={ref}>
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
