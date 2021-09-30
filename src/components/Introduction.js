import React from 'react';
import styled from '@emotion/styled';
import { LeftIntro } from './Animation';

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${LeftIntro} 3s ease-in-out 1 forwards;
`;

const Title = styled.h2`
  color: rgba(255, 255, 255, 0.7);
`;

const Introduction = () => {
  return (
    <Wrapper>
      <Title>Lydia Lenk</Title>
      <h1>
        <span>web</span>developer
      </h1>
    </Wrapper>
  );
};

export default Introduction;
