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

const ScrollButton = styled.button`
// position: absolute;
width: 40px;
height: 40px;
border: none;
border-radius: 10px;
color: white;
background-color: rgba(255, 255, 255, 0.3);
box-shadow: 0 0 4px #fff, 0 0 4px #fff, 0 0 4px #fff;
&:hover {
  transition: 0.1s all linear;
  transform: translateY(-2px);
}
`;

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return <FooterBox>
    Made with ♥︎
<ScrollButton onClick={scrollToTop}>UP</ScrollButton>
  </FooterBox>;
}
