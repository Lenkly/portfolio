import React from "react";
import styled from "@emotion/styled";
import logo from "./logo.svg";
import GlobalStyles from "./GlobalStyles";
// import { Browserrouter as Router, Switch, Route, Link } from "react-router-dom";
import spin from "./animations";

const Logospin = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${spin} infinite 5s linear;
`;

const Link = styled.a`
  color: #ff00ae;
`;

function App() {
  return (
    <div>
      <GlobalStyles />
      <Logospin src={logo} alt="logo" />
      <h1>Hello Bitches</h1>
      <Link
        href="https://kittichan.blogspot.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        You shouldn't go there. Really.
      </Link>
    </div>
  );
}

export default App;
