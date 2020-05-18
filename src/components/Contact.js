import React from 'react';
import styled from '@emotion/styled';

const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const TextBox = styled.div`
  align-items: center;
`;

export default function Contact() {
  return (
    <Content>
      <div>hallo</div>
      <TextBox>
        <h2>
          <span>&#123; </span>get a grip!<span> &#125;</span>
        </h2>
        <p>
          &lt;<span>p</span>&gt; Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet. &lt;/<span> p</span>
          &gt;
        </p>
      </TextBox>
    </Content>
  );
}
