// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold hover:text-blue-400 transition duration-300">My Portfolio</a>
        <div className="space-x-4">
          <a href="#about" className="hover:text-blue-400 transition duration-300">About</a>
          <a href="#projects" className="hover:text-blue-400 transition duration-300">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;