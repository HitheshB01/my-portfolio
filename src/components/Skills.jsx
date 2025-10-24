// import React from 'react';
// import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub,FaJava  } from 'react-icons/fa';
// import { SiTailwindcss, SiFirebase } from 'react-icons/si';

// const skills = [
//   { name: 'HTML', icon: <FaHtml5 className="text-6xl h-16 text-orange-500" /> },
//   { name: 'CSS', icon: <FaCss3Alt className="text-6xl text-blue-500" /> },
//   { name: 'JavaScript', icon: <FaJsSquare className="text-6xl text-yellow-500" /> },
//   { name: 'React', icon: <FaReact className="text-6xl text-cyan-500" /> },
// //   { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-green-500" /> },
//   { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-6xl text-teal-500" /> },
//   { name: 'Firebase', icon: <SiFirebase className="text-6xl text-yellow-400" /> },
//   { name: 'Java', icon: <FaJava className="text-6xl text-blue-500" /> },
//   { name: 'GitHub', icon: <FaGithub className="text-6xl text-gray-800" /> },

// ];

// const Skills = () => {
//   return (
//     <section id="skills" className="bg-gray-900 text-gray-300 py-12">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-3xl font-bold text-teal-400 mb-20">Skills</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
//           {skills.map((skill, index) => (
//             <div key={index} className=" flex flex-col items-center space-y-2">
//               {skill.icon}
//               <p className="text-2xl font-bold">{skill.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiMongodb, SiExpress } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-6xl" />, level: 90, color: 'text-orange-500' },
  { name: 'CSS', icon: <FaCss3Alt className="text-6xl" />, level: 85, color: 'text-blue-500' },
  { name: 'JavaScript', icon: <FaJsSquare className="text-6xl" />, level: 88, color: 'text-yellow-500' },
  { name: 'React', icon: <FaReact className="text-6xl" />, level: 85, color: 'text-cyan-500' },
  { name: 'Node.js', icon: <FaNodeJs className="text-6xl" />, level: 80, color: 'text-green-500' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-6xl" />, level: 90, color: 'text-teal-500' },
  { name: 'Firebase', icon: <SiFirebase className="text-6xl" />, level: 75, color: 'text-yellow-400' },
  { name: 'Java', icon: <FaJava className="text-6xl" />, level: 82, color: 'text-red-500' },
  { name: 'GitHub', icon: <FaGithub className="text-6xl" />, level: 88, color: 'text-gray-800' },
  { name: 'MongoDB', icon: <SiMongodb className="text-6xl" />, level: 78, color: 'text-green-600' },
  { name: 'Express', icon: <SiExpress className="text-6xl" />, level: 80, color: 'text-gray-400' },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-900 text-gray-300 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-teal-400 mb-4">Skills & Technologies</h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Here are the technologies I've been working with recently
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-teal-400/30"
            >
              <div className={`${skill.color} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              <p className="text-lg font-semibold text-white mb-2">{skill.name}</p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-teal-400 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;