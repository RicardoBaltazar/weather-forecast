import React from 'react';
import styled from 'styled-components';
import Input from './Components/Input';
import Capitals from './Components/Capitals';

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
      margin: 1rem 0;
    }
`

function App() {
  return (
    <>
      <Container>
        <h1>Previsão do tempo</h1>
        <Input />
        <Capitals />
      </Container>
    </>
  );
}

export default App;
