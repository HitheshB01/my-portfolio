// import React from 'react';

// const Footer = () => (
//   <footer className="bg-gray-900 text-white p-4 text-center">
//     <p>© 2024 Your Name. All rights reserved.</p>
//   </footer>
// );

// export default Footer;


import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-semibold text-white mb-2">Hithesh B</p>
            <p className="text-gray-400">Full-stack Developer</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            {[
              { icon: <FiGithub className="w-5 h-5" />, href: "https://github.com" },
              { icon: <FiLinkedin className="w-5 h-5" />, href: "https://linkedin.com" },
              { icon: <FiTwitter className="w-5 h-5" />, href: "https://twitter.com" },
              { icon: <FiMail className="w-5 h-5" />, href: "mailto:your.email@example.com" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300 transform hover:-translate-y-1"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Hithesh B. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;