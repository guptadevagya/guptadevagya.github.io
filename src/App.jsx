// src/App.jsx
import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
// import other components as you create them
// import About from './components/About';
// import Skills from './components/Skills';
// etc.

function App() {
  return (
    <div className="background">
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        
        {/*
        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>
        
        ... and so on for each section
        */}
      </main>
    </div>
  );
}

export default App;