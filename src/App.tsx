import React from 'react';
import styled from 'styled-components';
import Input from './Components/Input';

const Container = styled.div`
    height: 100vh;
    background-image: linear-gradient(#FF7F00, #FFBB00);
	background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        color: #ffffff;
        font-size: 2.3rem;
    }
`

function App() {
  return (
    <>
	    <Container>
            <h1>Previsão do tempo</h1>
            <Input />
        </Container>
    </>
  );
}

export default App;
