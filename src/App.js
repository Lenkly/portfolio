import React from 'react';
import styled from '@emotion/styled';
import AppHeader from './components/AppHeader';
import About from './components/About';
import './App.css';

// const Logospin = styled.img`
//   height: 40vmin;
//   pointer-events: none;
//   animation: ${spin} infinite 5s linear;
// `;

function App() {
  return (
    <div>
      <AppHeader />
      <main>
        <h1 className="heading">
          <span>web</span>developer
        </h1>
        <About />
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
