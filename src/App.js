import React from "react";
import styled from "@emotion/styled";
import logo from "./logo.svg";
import spin from "./animations";
import "./App.css";

const Logospin = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${spin} infinite 5s linear;
`;

function App() {
  return (
    <div>
      <main>
        <Logospin src={logo} alt="logo" />
        <h1 className="heading">
          <span>Hello</span> Bitches
        </h1>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          You shouldn't go there. Really.
        </a>
      </main>
    </div>
  );
}

export default App;
