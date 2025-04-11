import GlobalStyle from "./styles/global-style.js";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Form from "./components/Form.js";
import Grid from "./components/Grid.js";
import axios from "axios";

const Container = styled.div`
    width: 100%;
    max-width: 800px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const Title = styled.h2``;

function App() {
    const [produtos, setProdutos] = useState([]);
    const [onEdit, setOnEdit] = useState(null);

    // buscar produtos da api
    const getProdutos = async () => {
        try {
            const res = await axios.get("http://localhost:3001/produtos");
            setProdutos(
                // filtrar ordem alfabetica
                res.data.sort((a, b) => (a.produto > b.produto ? 1 : -1))
            );
        } catch (error) {}
    };

    useEffect(() => {
        getProdutos();
    }, [setProdutos]);

    return (
        <>
            <Container>
                <Title>Produtos</Title>
                <Form
                    onEdit={onEdit}
                    setOnEdit={setOnEdit}
                    getProdutos={getProdutos}
                />
                <Grid
                    produtos={produtos}
                    setProdutos={setProdutos}
                    setOnEdit={setOnEdit}
                />
            </Container>
            <GlobalStyle />
        </>
    );
}

export default App;
