// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center text-center p-6">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">Ibrohim Ruzmetov</h1>
      <p className="text-xl md:text-2xl mb-8">Junior Full Stack Developer and Data scientist</p>
      <a
        href="#projects"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300"
      >
        View My Work
      </a>
    </section>
  );
};
export default Hero;
