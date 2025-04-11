import GlobalStyle from "./styles/global-style.js";
import styled from "styled-components";
import { useState } from "react";
import Form from "./components/Form.js";
import Grid from "./components/Grid.js";

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
    return (
        <>
            <Container>
                <Title>Produtos</Title>
                <Form />
                <Grid />
            </Container>
            <GlobalStyle />
        </>
    );
}

export default App;
