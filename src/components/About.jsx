import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src="/about.png" alt="Prajwal Kumar" className="rounded-lg w-full"/>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold text-teal-400 mb-4">About Me</h2>
          <p className="mb-4">
            I'm Prajwal Kumar, a full-stack developer with a passion for crafting intuitive web experiences. 
            I am currently pursuing an MCA and have worked on various projects, including a placement portal, chat application, and crop recommendation system.
          </p>
          <p className="mb-4">
            Achievements include winning 1st place in Tech Transform and 2nd place in Codexplore. 
            I enjoy learning and working with technologies like React, Firebase, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
