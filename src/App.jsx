// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css'; // Ensure Tailwind styles are loaded

function App() {
  return (
    <div className="font-sans"> {/* Apply a default font if configured in Tailwind */}
      <Navbar />
      <Hero />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white text-center p-6">
        <p>&copy; {new Date().getFullYear()} Ibrohim Ruzmetov. All rights reserved.</p>
        {/* https://www.github.com/Rub4ik */}
      </footer>
    </div>
  );
}
export default App;
