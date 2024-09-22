// ProjectCard.jsx
import React from 'react';

const projects = [
  {
    title: 'BuurtHub',
    description: 'An all-inclusive Community forum platform where users can stay updated on local events, make posts, and trade goods and services.',
    tech: 'React, Node JS, Figma, Tailwind CSS, Adaptable, Vercel, Supabase, Express, MongoDB',
    image: 'https://via.placeholder.com/300', // Replace with actual image URL
    demoLink: '#', // Replace with actual demo link
    sourceLink: '#', // Replace with actual source link
  },
  {
    title: 'StyleSavvy',
    description: 'A single-page application created with React and Node that facilitates online booking of various beauty services.',
    tech: 'React, Node JS, Figma, Tailwind CSS, Netlify',
    image: 'https://via.placeholder.com/300', // Replace with actual image URL
    demoLink: '#', // Replace with actual demo link
    sourceLink: '#', // Replace with actual source link
  },
  {
    title: 'Fix It Game',
    description: 'A single-player quiz game designed to test basic knowledge of computer hardware parts using HTML5, CSS, and JavaScript.',
    tech: 'HTML, CSS, JavaScript, Canva',
    image: 'https://via.placeholder.com/300', // Replace with actual image URL
    demoLink: '#', // Replace with actual demo link
    sourceLink: '#', // Replace with actual source link
  },
];

function ProjectCard({ title, description, tech, image, demoLink, sourceLink }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-gray-500 mb-4"><strong>Technologies Used:</strong> {tech}</p>
        <div className="flex space-x-4">
          <a href={demoLink} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" target="_blank" rel="noopener noreferrer">App Demo</a>
          <a href={sourceLink} className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900" target="_blank" rel="noopener noreferrer">Source Code</a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">My Projects</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
