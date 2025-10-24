// import React from 'react';
// import logo from '../images/logo3.png';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-900 text-gray-300 fixed w-full top-0 z-50 shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Replace this with your logo image */}
//         <img 
//           src={logo} // Replace with your logo image path
//           alt="Logo" 
//           className="h-12 " // Adjust height as needed
//         />
//         <ul className="flex text-xl space-x-6 font-bold">
//           <li><a href="#home" className="hover:text-white">Home</a></li>
//           <li><a href="#about" className="hover:text-white">About</a></li>
//           <li><a href="#skills" className="hover:text-white">Skills</a></li>
//           <li><a href="#projects" className="hover:text-white">Projects</a></li>
//           <li><a href="#contact" className="hover:text-white">Contact</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState, useEffect } from 'react';
import logo from '../images/logo3.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <img 
            src={logo}
            alt="Logo" 
            className="h-10 w-10 transition-transform duration-300 hover:scale-110"
          />
          <ul className="hidden md:flex space-x-8 text-lg font-medium">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          
          {/* Mobile menu button */}
          <button className="md:hidden text-gray-300 hover:text-teal-400 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;