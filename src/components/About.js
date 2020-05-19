import React from 'react';
import { Content, TextBox, CopyText } from './Gridbox';
import styled from '@emotion/styled';
import hold from '../assets/placeholder.png';

const Placeholder = styled.img`
  width: 600px;
  height: auto;
  align-self: center;
`;

export default function About() {
  return (
    <Content>
      <Placeholder src={hold} />
      <TextBox>
        <h2>
          <span>&#123; </span>about<span> &#125;</span>
        </h2>
        <p>
          &lt;<span>p</span>&gt;
          <CopyText>
            While I recently graduated coding bootcamp to become a web
            developer, I always had a passion for webdesign and ... I've run
            blogs on wordpress and blogger for years, always trying to customize
            blog themes to the max. In recent years and after graduating
            university with a master's degree, I worked in marketing departments
            and partnered up with agencies to generate the perfect web ... for
            the client.
          </CopyText>
          &lt;/<span> p</span>
          &gt;
        </p>
      </TextBox>
    </Content>
  );
}
