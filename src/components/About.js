import React from 'react';
import styled from '@emotion/styled';

const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const TextBox = styled.div`
  align-items: center;
`;

export default function About() {
  return (
    <Content>
      <div>hallo</div>
      <TextBox>
        <h2>
          <span>| </span>about<span> |</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </TextBox>
    </Content>
  );
}
