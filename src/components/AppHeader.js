import React from 'react';
import styled from '@emotion/styled';
import Octocat from '../assets/Octocat';

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  margin: 0 55px;
  height: 100px;
  width: 100%;
  background: #282936;
  position: fixed;
`;

const Title = styled.div`
  font-family: 'Helvetica Neue';
  text-transform: uppercase;
  font-size: 45px;
  color: rgba(255, 255, 255, 0.7);
`;

const Link = styled.button`
  background: none;
  border: none;
  &:hover {
    transition: 0.1s all linear;
    transform: translateY(-2px);
  }
`;

function AppHeader() {
  return (
    <Header>
      <Title>Lydia Lenk</Title>
      <Link>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Octocat />
        </a>
      </Link>
    </Header>
  );
}

export default AppHeader;
