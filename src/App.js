import React from 'react';
import AppHeader from './components/AppHeader';
import About from './components/About';
import Idea from './components/Idea';
import Design from './components/Design';
import Development from './components/Development';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <AppHeader />
      <main>
        <h1>
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
          Don't click me.
        </a>
      </main>
      <Footer />
    </div>
  );
}

export default App;
