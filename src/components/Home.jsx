// import React from 'react';
// import resume from '../images/Hithesh_B.pdf';

// const Home = () => {
//   return (
//     <section className="min-h-screen flex items-center bg-gray-900 text-white">
//       <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 lg:mx-32">
//         <div className="max-w-xl mx-auto md:max-w-none py-16 md:py-32">
//           <h1 className="text-teal-400 text-sm sm:text-base md:text-lg font-semibold leading-tight">
//             Hi, my name is
//           </h1>
//           <h2 className="text-gray-200 text-3xl sm:text-5xl md:text-7xl font-extrabold my-4">
//             Hithesh B
//           </h2>
//           <h3 className="text-gray-400 text-2xl sm:text-4xl md:text-5xl font-medium">
//             Full-stack Developer
//           </h3>
//           <p className="text-gray-300 text-base sm:text-lg md:text-xl mt-4 leading-relaxed">
//             I’m a full-stack developer specializing in building and occasionally
//             designing exceptional digital experiences. Currently, I’m focused
//             on building responsive full-stack web applications.
//           </p>
//           <a
//             href={resume} // Replace with the actual path to your resume
//             target="_blank"
//             // download="Resume"
//             rel="noopener noreferrer"
//             className="mt-8 inline-block px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-500 transition duration-300"
//           >
//             Resume
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;


// import React from 'react';
// import resume from '../images/Hithesh_B.pdf';

// const Home = () => {
//   return (
//     <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
//       </div>
      
//       <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 relative z-10">
//         <div className="max-w-2xl">
//           <h1 className="text-teal-400 text-sm sm:text-base md:text-lg font-mono mb-4">
//             Hi, my name is
//           </h1>
//           <h2 className="text-white text-4xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight">
//             Hithesh B.
//           </h2>
//           <h3 className="text-gray-400 text-2xl sm:text-4xl md:text-5xl font-semibold mb-6">
//             I build things for the web.
//           </h3>
//           <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">
//             I'm a full-stack developer specializing in building exceptional digital experiences. 
//             Currently, I'm focused on creating responsive full-stack web applications.
//           </p>
//           <div className="flex space-x-4">
//             <a
//               href={resume}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-8 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-500 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-teal-500/25"
//             >
//               View Resume
//             </a>
//             <a
//               href="#contact"
//               className="px-8 py-3 border-2 border-teal-400 text-teal-400 rounded-lg hover:bg-teal-400 hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1"
//             >
//               Get In Touch
//             </a>
//           </div>
//         </div>
//       </div>
      
//       {/* Scroll indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <a href="#about" className="text-gray-400 hover:text-teal-400 transition-colors">
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//           </svg>
//         </a>
//       </div>
//     </section>
//   );
// }

// export default Home;



import React from 'react';
import resume from '../images/Hithesh_B.pdf';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="max-w-2xl lg:w-1/2">
            <h1 className="text-teal-400 text-sm sm:text-base md:text-lg font-mono mb-4">
              Hi, my name is
            </h1>
            <h2 className="text-white text-4xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight">
              Hithesh B
            </h2>
            <h3 className="text-gray-400 text-2xl sm:text-4xl md:text-5xl font-semibold mb-6">
              I build things for the web.
            </h3>
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">
              I'm a full-stack developer specializing in building exceptional digital experiences. 
              Currently, I'm focused on creating responsive full-stack web applications.
            </p>
            <div className="flex space-x-4">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-500 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-teal-500/25"
              >
                View Resume
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-teal-400 text-teal-400 rounded-lg hover:bg-teal-400 hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* SVG Illustration */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Animated SVG */}
              <svg 
                viewBox="0 0 400 400" 
                className="w-full h-auto filter drop-shadow-2xl"
              >
                {/* Background Circle */}
                <circle 
                  cx="200" 
                  cy="200" 
                  r="180" 
                  fill="none" 
                  stroke="#0D9488" 
                  strokeWidth="2" 
                  strokeDasharray="8 4"
                  className="animate-pulse"
                />
                
                {/* Main Developer Illustration */}
                {/* Laptop */}
                <rect 
                  x="120" 
                  y="220" 
                  width="160" 
                  height="100" 
                  rx="8" 
                  fill="#1F2937" 
                  stroke="#0D9488" 
                  strokeWidth="2"
                />
                
                {/* Laptop Screen */}
                <rect 
                  x="130" 
                  y="230" 
                  width="140" 
                  height="70" 
                  rx="4" 
                  fill="#0D9488" 
                  opacity="0.3"
                />
                
                {/* Code Lines */}
                <g fill="#FFFFFF" opacity="0.8">
                  <rect x="140" y="245" width="80" height="3" rx="2" />
                  <rect x="140" y="255" width="60" height="3" rx="2" />
                  <rect x="140" y="265" width="70" height="3" rx="2" />
                  <rect x="140" y="275" width="50" height="3" rx="2" />
                </g>
                
                {/* Developer Figure */}
                {/* Head */}
                <circle 
                  cx="200" 
                  cy="150" 
                  r="25" 
                  fill="#374151" 
                  stroke="#0D9488" 
                  strokeWidth="2"
                />
                
                {/* Body */}
                <rect 
                  x="185" 
                  y="175" 
                  width="30" 
                  height="40" 
                  fill="#374151" 
                  stroke="#0D9488" 
                  strokeWidth="2"
                />
                
                {/* Arms */}
                <rect 
                  x="155" 
                  y="180" 
                  width="30" 
                  height="8" 
                  rx="4" 
                  fill="#374151" 
                  stroke="#0D9488" 
                  strokeWidth="1"
                />
                <rect 
                  x="215" 
                  y="180" 
                  width="30" 
                  height="8" 
                  rx="4" 
                  fill="#374151" 
                  stroke="#0D9488" 
                  strokeWidth="1"
                />
                
                {/* Floating Code Elements */}
                <g className="animate-float">
                  <rect 
                    x="80" 
                    y="100" 
                    width="40" 
                    height="8" 
                    rx="4" 
                    fill="#0D9488" 
                    opacity="0.6"
                  />
                  <rect 
                    x="280" 
                    y="120" 
                    width="30" 
                    height="8" 
                    rx="4" 
                    fill="#0D9488" 
                    opacity="0.6"
                  />
                  <rect 
                    x="320" 
                    y="180" 
                    width="50" 
                    height="8" 
                    rx="4" 
                    fill="#0D9488" 
                    opacity="0.6"
                  />
                  <rect 
                    x="60" 
                    y="180" 
                    width="25" 
                    height="8" 
                    rx="4" 
                    fill="#0D9488" 
                    opacity="0.6"
                  />
                  <rect 
                    x="100" 
                    y="280" 
                    width="35" 
                    height="8" 
                    rx="4" 
                    fill="#0D9488" 
                    opacity="0.6"
                  />
                  <rect 
                    x="300" 
                    y="280" 
                    width="45" 
                    height="8" 
                    rx="4" 
                    fill="#0D9488" 
                    opacity="0.6"
                  />
                </g>
                
                {/* Connection Lines */}
                <g stroke="#0D9488" strokeWidth="1" opacity="0.5" strokeDasharray="4 2">
                  <line x1="200" y1="150" x2="240" y2="120" />
                  <line x1="200" y1="150" x2="160" y2="100" />
                  <line x1="200" y1="150" x2="280" y2="180" />
                  <line x1="200" y1="150" x2="120" y2="180" />
                </g>
                
                {/* Animated Circles */}
                <circle 
                  cx="200" 
                  cy="200" 
                  r="5" 
                  fill="#0D9488" 
                  className="animate-ping opacity-75"
                />
              </svg>
              
              {/* Floating particles */}
              <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-teal-400 rounded-full opacity-60"
                    style={{
                      top: `${20 + i * 15}%`,
                      left: `${10 + i * 15}%`,
                      animation: `float 3s infinite ${i * 0.5}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-teal-400 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default Home;
