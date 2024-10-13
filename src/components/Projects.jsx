import React from 'react';

const projects = [
  {
    name: 'Placement Portal',
    description: 'A portal for students to apply for jobs and college admins to post jobs.',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    link: '#'
  },
  {
    name: 'Resume Builder',
    description: 'A web app to build and download resumes with real-time preview.',
    tech: ['React', 'Tailwind CSS'],
    link: '#'
  },
  {
    name: 'Chat Application',
    description: 'A Firebase-powered real-time chat application with React and Tailwind CSS.',
    tech: ['React', 'Firebase'],
    link: '#'
  },
  {
    name: 'Crop Recommendation System',
    description: 'A machine learning-based system for recommending optimal crops based on soil data.',
    tech: ['Python', 'Machine Learning'],
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-800 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-teal-400 mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-teal-400 mb-2">{project.name}</h3>
              <p className="mb-4">{project.description}</p>
              <p className="text-gray-400 text-sm mb-4">Tech: {project.tech.join(', ')}</p>
              <a href={project.link} className="text-teal-400 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
