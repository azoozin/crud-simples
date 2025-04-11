import React from "react";
import styled from "styled-components";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";

const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    max-width: 800px;
    margin: 20px auto;
    word-break: break-all;
`;

export const Thead = styled.thead``;
export const Tbody = styled.tbody``;
export const Tr = styled.tr``;
export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;
`;
export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width : "auto")};
`;

const Grid = ({ produtos }) => {
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Produto</Th>
                    <Th>Categoria</Th>
                    <Th>Quantidade</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {produtos.map((item, i) => (
                    <Tr key={i}>
                        <Td width="30%">{item.produto}</Td>
                        <Td width="30%">{item.categoria}</Td>
                        <Td width="30%">{item.quantidade}</Td>

                        <Td alignCenter width="5%">
                            <FaEdit />
                        </Td>
                        <Td alignCenter width="5%">
                            <FaTrash />
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
};

export default Grid;
