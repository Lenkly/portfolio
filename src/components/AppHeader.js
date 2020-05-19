import React from 'react';
import styled from '@emotion/styled';
import Octocat from '../assets/Octocat';
import LinkedIn from '../assets/LinkedIn';
import Email from '../assets/Email';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 55px;
  padding-bottom: 10px;
  height: 70px;
  width: 100%;
  background: #282936;
  position: fixed;
`;

const Title = styled.div`
  font-family: 'Helvetica Neue';
  font-size: 30px;
  color: rgba(255, 255, 255, 0.7);
`;

const Links = styled.div`
  display: flex;
  margin-right: inherit;
`;

const Link = styled.button`
  background: none;
  border: none;
  margin-left: 10px;
  &:hover {
    transition: 0.1s all linear;
    transform: translateY(-2px);
  }
`;

function AppHeader() {
  return (
    <Header>
      <Title>lydia lenk</Title>
      <Links>
        <Link>
          <a
            href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#108;&#101;&#110;&#107;&#46;&#108;&#121;&#100;&#105;&#97;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Email />
          </a>
        </Link>
        <Link>
          <a
            href="https://www.github.com/Lenkly"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Octocat />
          </a>
        </Link>
        <Link>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>
        </Link>
      </Links>
    </Header>
  );
}

export default AppHeader;
