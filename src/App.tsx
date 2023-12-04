import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Card } from './styles/components/Card.styled';
import { Background } from './styles/components/Background.styled';
import { Title } from './styles/components/Title.styled';
import { Descr } from './styles/components/Descr.styled';
import { CopyOfPrimaryBtn, PrimaryBtn } from './styles/components/PrimaryBtn.styled';

function App() {
  return (
    <div className="App">
      <Box>
        <Card>
          <Background></Background>
          <Title>Headline</Title>
          <Descr>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Descr>
          <PrimaryBtn>See more</PrimaryBtn>
          <CopyOfPrimaryBtn>Save</CopyOfPrimaryBtn>
        </Card>
      </Box>
    </div>
  );
}

export default App;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;





