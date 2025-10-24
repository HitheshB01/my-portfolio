
// import React from 'react';



// import { FiGithub, FiExternalLink } from 'react-icons/fi'; // Icons for links
// import ProjectPic from "../images/HomePage.png"; // Example image, replace as necessary

// // Array of project data
// const projectData = [
//   {
//     title: "Spotify Profile",
//     description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
//     technologies: ["React", "Styled Components", "Express", "Spotify API", "Heroku"],
//     githubLink: "https://github.com",
//     externalLink: "https://external-link.com",
//     image: ProjectPic // Replace with your own image or image path
//   },
//   {
//     title: "Weather Dashboard",
//     description: "A web application that provides real-time weather data for any location. The app integrates with multiple weather APIs to give accurate, up-to-date weather forecasts.",
//     technologies: ["React", "Node.js", "OpenWeather API", "CSS"],
//     githubLink: "https://github.com",
//     externalLink: "https://external-link.com",
//     image: ProjectPic// Replace with your own image or image path
//   },
//   {
//     title: "E-commerce Platform",
//     description: "A full-featured e-commerce platform that allows users to browse products, add them to the cart, and checkout. Features an admin panel for product management and order processing.",
//     technologies: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
//     githubLink: "https://github.com",
//     externalLink: "https://external-link.com",
//     image: ProjectPic // Replace with your own image or image path
//   }
// ];
// const Projects = () => {
//   return (
//     <section className="bg-gray-900 text-lightGray p-10">
//       <h2 className="text-4xl font-bold text-teal-400 mb-12 text-center">Projects</h2>

//       {projectData.map((project, index) => (
//         <div
//           key={index}
//           className="relative text-gray-300 mb-20 flex flex-col md:flex-row items-center justify-between"
//         >
//           {/* Left Section: Project Info - with overlapping effect */}
//           <div className="md:absolute md:left-52  p-6 rounded-md max-w-2xl z-20 mb-10 md:mb-0">
//             <p className="text-neonGreen font-mono text-sm">Featured Project</p>
//             <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
//             <p className="mb-4 bg-gray-800 p-6 rounded-md">{project.description}</p>

//             {/* Tech Stack */}
//             <ul className="flex flex-wrap space-x-4 mb-4 text-lightGray text-sm">
//               {project.technologies.map((tech, techIndex) => (
//                 <li key={techIndex}>{tech}</li>
//               ))}
//             </ul>

//             {/* Links */}
//             <div className="flex space-x-4 text-neonGreen">
//               <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
//                 <FiGithub className="w-6 h-6" />
//               </a>
//               <a href={project.externalLink} target="_blank" rel="noopener noreferrer">
//                 <FiExternalLink className="w-6 h-6" />
//               </a>
//             </div>
//           </div>

//           {/* Right Section: Project Image */}
//           <div className="relative md:w-1/2 flex  md:ml-auto">
//             <img
//               src={project.image}
//               alt={`Project ${index}`}
//               className=" rounded-md w-3/4 md:w-3/4 h-96 object-cover z-10"
//             />
//             <div className="absolute rounded-md w-3/4 md:w-3/4 h-96 inset-0 bg-teal-300 bg-opacity-40 z-10"></div>
//             <div className="absolute top-2 left-2 w-3/4 md:w-3/4 h-96 border-2 border-teal-300 rounded-md z-0"></div>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Projects;



import React, { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import ProjectPic from "../images/HomePage.png";

const projectData = [
  {
    title: "Spotify Profile",
    description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    technologies: ["React", "Styled Components", "Express", "Spotify API", "Heroku"],
    githubLink: "https://github.com",
    externalLink: "https://external-link.com",
    image: ProjectPic
  },
  {
    title: "Weather Dashboard",
    description: "A web application that provides real-time weather data for any location. The app integrates with multiple weather APIs to give accurate, up-to-date weather forecasts with beautiful visualizations.",
    technologies: ["React", "Node.js", "OpenWeather API", "Chart.js"],
    githubLink: "https://github.com",
    externalLink: "https://external-link.com",
    image: ProjectPic
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform that allows users to browse products, add them to the cart, and checkout. Features an admin panel for product management and order processing.",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Stripe"],
    githubLink: "https://github.com",
    externalLink: "https://external-link.com",
    image: ProjectPic
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="projects" className="bg-gray-800 text-lightGray py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-teal-400 mb-4">Featured Projects</h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Here are some of the projects I've built recently
        </p>

        <div className="space-y-32">
          {projectData.map((project, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              {/* Project Image */}
              <div className="lg:w-1/2 relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-teal-400/10 group-hover:bg-transparent transition-colors duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Project Info */}
              <div className="lg:w-1/2">
                <p className="text-teal-400 font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg mb-6 border border-gray-700">
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-900 text-teal-400 rounded-full text-sm font-mono border border-teal-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-teal-400 transition-colors duration-300"
                  >
                    <FiGithub className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.externalLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-teal-400 transition-colors duration-300"
                  >
                    <FiExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

