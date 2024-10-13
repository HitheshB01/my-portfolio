import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-gray-300 fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-bold text-teal-400">Prajwal Kumar</h1>
        <ul className="flex space-x-6 font-bold">
          <li><a href="#home" className="hover:text-white">Home</a></li>
          <li><a href="#about" className="hover:text-white">About</a></li>
          <li><a href="#skills" className="hover:text-white">Skills</a></li>
          <li><a href="#projects" className="hover:text-white">Projects</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
