import React from "react";
import styled from "@emotion/styled";

const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  height: 145px;
  width: 100%;
  background: #282936;
  color: rgba(255, 255, 255, 0.7);
`;

const Title = styled.p`
  font-size: 50px;
`;

function AppHeader() {
  return (
    <Header>
      <Title>Lydi</Title>
    </Header>
  );
}

export default AppHeader;
