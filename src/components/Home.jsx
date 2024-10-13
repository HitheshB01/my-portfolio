import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-xl mx-auto md:max-w-none">
          <h1 className="text-teal-400 text-4xl md:text-6xl font-bold leading-tight">
            Hi, my name is
          </h1>
          <h2 className="text-gray-200 text-5xl md:text-7xl font-extrabold my-4">
            Prajwal Kumar
          </h2>
          <h3 className="text-gray-400 text-3xl md:text-5xl font-medium">
            Full-stack Developer
          </h3>
          <p className="text-gray-300 text-lg md:text-xl mt-4 leading-relaxed">
            I’m a full-stack developer specializing in building and occasionally
            designing exceptional digital experiences. Currently, I’m focused
            on building responsive full-stack web applications.
          </p>
          <button className="mt-8 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-500 transition duration-300">
            View Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
