import React from 'react';
import styled from 'styled-components/native';

const Main = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  color: red;
  font-size: 16px;
  font-weight: bold;
`;

const HomeScreen = () => {
  return (
    <Main>
      <Title>HomeScreen</Title>
    </Main>
  )
}

export default HomeScreen