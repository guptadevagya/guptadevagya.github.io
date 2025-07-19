import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div> {}
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