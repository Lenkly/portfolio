import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello Bitches</h1>
        <a
          className="App-link"
          href="https://kittichan.blogspot.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          You shouldn't go there. Really.
        </a>
      </header>
    </div>
  );
}

export default App;
