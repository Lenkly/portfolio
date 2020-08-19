import React from 'react';
import { Content, TextBox, CopyText } from './Gridbox';
import styled from '@emotion/styled';
import hold from '../assets/placeholder.png';
import Fade from 'react-reveal/Fade';

const Placeholder = styled.img`
  width: 600px;
  height: auto;
  align-self: center;
`;

export default function Development() {
  return (
    <Content>
      <TextBox>
        <Fade bottom>
          <h2>
            <span>&#123; </span>development<span> &#125;</span>
          </h2>
          <p>
            &lt;<span>p</span>&gt;
            <CopyText>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet.
            </CopyText>
            &lt;/<span> p</span>
            &gt;
          </p>
        </Fade>
      </TextBox>
      <Placeholder src={hold} />
    </Content>
  );
}
