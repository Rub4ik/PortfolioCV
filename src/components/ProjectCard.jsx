// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ title, description, imageUrl, projectUrl, techStack }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img src={imageUrl || 'https://placehold.co/600x400/E2E8F0/2D3748?text=Project+Image'} alt={title} className="w-full h-48 object-cover"/>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-700 mb-4 text-sm leading-relaxed">{description}</p>
        <div className="mb-4">
          <span className="font-semibold text-gray-600">Technologies: </span>
          <span className="text-gray-600 text-sm">{techStack.join(', ')}</span>
        </div>
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          View Project
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
