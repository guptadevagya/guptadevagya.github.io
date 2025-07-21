import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <video autoPlay loop muted className="background-video">
        <source src="/assets/animated.mp4" type="video/mp4" />
      </video>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;