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
            Graduating university with a master's degree in Customer
            Relationship Management and coming from a marketing background I
            always had a thing for web design, web technologies and good content
            as well as an eye for detail. I recently changed career paths to
            follow my passion to become a web developer and now work fulltime as
            a frontend engineer.
          </CopyText>
          &lt;/<span> p</span>
          &gt;
        </p>
      </TextBox>
    </Content>
  );
}
