import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub,FaJava  } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-8xl text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-8xl text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-8xl text-yellow-500" /> },
  { name: 'React', icon: <FaReact className="text-8xl text-cyan-500" /> },
//   { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-green-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-8xl text-teal-500" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-8xl text-yellow-400" /> },
  { name: 'Java', icon: <FaJava className="text-8xl text-blue-500" /> },
  { name: 'GitHub', icon: <FaGithub className="text-8xl text-gray-900" /> },

];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-800 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-teal-400 mb-20">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className=" flex flex-col items-center space-y-2">
              {skill.icon}
              <p className="text-2xl font-bold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
