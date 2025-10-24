
// import React from "react";
// import ProfilePic from "../images/hithesh.jpeg";

// const About = () => {
//   return (
//     <section className="bg-gray-900 text-lightGray p-10 flex flex-col md:flex-row items-center justify-around">
//       {/* Left Section: Education Info */}
//       <div className="max-w-lg">
//         <h2 className="text-3xl text-center font-bold text-teal-400">Education</h2>
//         <p className="mb-4 text-gray-300">
//           <strong>Master of Computer Application (MCA)</strong> - [Your College Name], [Year of Graduation]
//         </p>
//         <p className="mb-4 text-gray-300">
//           <strong>Bachelor of Science (B.Sc.) in Computer Science</strong> - [Your College Name], [Year of Graduation]
//         </p>
//         {/* Add more education details as needed */}
//       </div>

//       {/* Right Section: Image */}
//       <div className="mt-10 md:mt-0 md:ml-10 relative">
//         <img
//           src={ProfilePic}
//           alt="Your Name"
//           className="rounded-md w-72 h-72 object-cover"
//         />
//         <div className="absolute inset-0 bg-teal-300 bg-opacity-40"></div>
//         <div className="absolute top-2 left-2 w-72 h-72 border-2 border-teal-300 rounded-md"></div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from "react";
import ProfilePic from "../images/hithesh.jpeg";

const About = () => {
  return (
    <section id="about" className="bg-gray-800 text-lightGray py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-teal-400 mb-16 relative">
          About Me
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-teal-400 mt-2"></span>
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Image Section */}
          <div className="relative group lg:w-2/5">
            <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-300">
              <img
                src={ProfilePic}
                alt="Hithesh B"
                className="rounded-lg w-80 h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="absolute top-4 left-4 w-80 h-80 border-2 border-teal-400 rounded-lg group-hover:translate-y-2 group-hover:translate-x-2 transition-transform duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-lg group-hover:opacity-0 transition-opacity duration-300"></div>
          </div>

          {/* Content Section */}
          <div className="lg:w-3/5">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Education & Background</h3>
              
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-teal-400">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-teal-400 rounded-full"></div>
                  <h4 className="text-xl font-semibold text-white">Master of Computer Application (MCA)</h4>
                  <p className="text-gray-400">[Your College Name], [Year of Graduation]</p>
                  <p className="text-gray-300 mt-2">Specialized in advanced software development and system architecture.</p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-teal-400">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-teal-400 rounded-full"></div>
                  <h4 className="text-xl font-semibold text-white">Bachelor of Science in Computer Science</h4>
                  <p className="text-gray-400">[Your College Name], [Year of Graduation]</p>
                  <p className="text-gray-300 mt-2">Focused on fundamental computer science principles and programming.</p>
                </div>
              </div>

              <p className="text-gray-300 mt-8 leading-relaxed">
                I'm passionate about creating efficient, scalable web applications with great user experiences. 
                I love learning new technologies and solving complex problems through code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;