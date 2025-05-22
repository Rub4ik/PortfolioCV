// src/components/Projects.jsx
import React from 'react';
import ProjectCard from './ProjectCard';

// Later, this data could come from Firestore
const projectData = [
  {
    id: 1,
    title: 'Awesome Project 1',
    description: 'A brief description of this amazing project that solves a real-world problem using cool tech.',
    imageUrl: 'https://placehold.co/600x400/90CDF4/2D3748?text=Project+1', // Replace with your actual image URL or import from assets
    projectUrl: '#', // Link to live demo or GitHub repo
    techStack: ['React', 'Node.js', 'Express']
  },
  {
    id: 2,
    title: 'Innovative App 2',
    description: 'This app revolutionizes how users interact with daily tasks through a sleek and intuitive interface.',
    imageUrl: 'https://placehold.co/600x400/A7F3D0/2D3748?text=Project+2',
    projectUrl: '#',
    techStack: ['Vue.js', 'Firebase', 'Tailwind CSS']
  },
  // Add more projects
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
              techStack={project.techStack}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
