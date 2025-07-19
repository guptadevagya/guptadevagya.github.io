// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar'; // <-- Capital 'N'
import Home from './components/Home';     // <-- Capital 'H'

function App() {
  return (
    <div> {/* Use a simple div, not a class 'background' unless you define it in CSS */}
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>

        {/* ... other sections will go here ... */}
      </main>
    </div>
  );
}

export default App;