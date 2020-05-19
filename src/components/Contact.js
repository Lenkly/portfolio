import React from 'react';
import styled from '@emotion/styled';
import { Content, TextBox, CopyText } from './Gridbox';
import logo from '../assets/logo.svg';
import spin from '../animations';

// const Picture = styled.img`
//   height: 500px;
//   width: 500px;
// `;

const Text = styled(CopyText)`
  color: #e7ef93;
  margin-left: 0;
`;

const GreenText = styled.span`
  color: #59df7c;
`;
const YellowText = styled(GreenText)`
  color: #e7ef93;
`;

const Logospin = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${spin} infinite 5s linear;
`;

export default function Contact() {
  return (
    <Content>
      <Logospin src={logo} alt="logo" />
      <TextBox>
        <h2>
          <span>const</span> lydia <span>&#61;</span> contact.
          <GreenText>dev</GreenText>
          <YellowText>`</YellowText>
        </h2>
        <p>
          <Text>
            Located in Düsseldorf, Germany, but used to work remote - so you can
            call me up any time!
          </Text>
        </p>
        <h2>
          <YellowText>`;</YellowText>
        </h2>
      </TextBox>
    </Content>
  );
}
