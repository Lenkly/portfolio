import React from 'react';
import AppHeader from './components/AppHeader';
import About from './components/About';
import Idea from './components/Idea';
import Design from './components/Design';
import Development from './components/Development';
import Contact from './components/Contact';
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
        <Idea />
        <Design />
        <Development />
        <Contact />
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
