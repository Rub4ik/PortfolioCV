// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">About Me</h2>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl">
          <p className="text-gray-700 leading-relaxed">
            Hello! I'm Ibrohim Ruzmetov, a passionate and aspiring Full Stack Developer and Data scientist.
            I enjoy building web applications and learning new technologies.
            This portfolio showcases some of the projects I've worked on.
            {/* ML engineer */}
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
