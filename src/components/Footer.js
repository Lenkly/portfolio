import React from 'react';
import styled from '@emotion/styled';

const FooterBox = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75px;
  width: 100%;
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  background-color: rgba(0, 0, 0, 0.3);
`;

export default function Footer() {
  return <FooterBox>Hello!</FooterBox>;
}
