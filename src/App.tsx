import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Card } from './styles/components/Card.styled';
import { CardImage } from './styles/components/CardImage.styled';
import { Title } from './styles/components/Title.styled';
import { Descr } from './styles/components/Descr.styled';
import { PrimaryBtn, SecondaryBtn } from './styles/components/Btn';
import cardImg from './assets/images/img.jpg';
import { BoxBtn } from './styles/components/BoxBtn.styled';

function App() {
  return (
    <div className="App">
      <Box>
        <Card>
          <CardImage src={cardImg} />
          <BoxBtn>
            <Title>Headline</Title>
            <Descr color={'#0a4473'} fontSize={'14px'}>
              Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
              ornare in venen.
            </Descr>
            <PrimaryBtn colorBgc='#4e71fe' color='#efbcbc'>See more</PrimaryBtn>
            <SecondaryBtn colorBgc='#ec8312'>Save</SecondaryBtn>
          </BoxBtn>
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

