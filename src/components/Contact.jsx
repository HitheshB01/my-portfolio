// import React from 'react';

// const Contact = () => {
//   return (
//     <section id="contact" className="bg-gray-900 text-gray-300 py-12">
//       <div className="max-w-5xl mx-auto text-center">
//         <h2 className="text-3xl font-bold text-teal-400 mb-8">Contact Me</h2>
//         <form className="max-w-lg mx-auto">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full p-3 bg-gray-800 text-gray-300 mb-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="w-full p-3 bg-gray-800 text-gray-300 mb-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
//           />
//           <textarea
//             rows="5"
//             placeholder="Your Message"
//             className="w-full p-3 bg-gray-800 text-gray-300 mb-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
//           ></textarea>
//           <button
//             type="submit"
//             className="w-full p-3 bg-teal-600 text-white rounded-lg hover:bg-teal-500"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;

  import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="bg-gray-900 text-gray-300 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-teal-400 mb-4">Get In Touch</h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8">
                I'm always interested in hearing about new opportunities and projects. 
                Feel free to reach out if you'd like to work together or just say hello!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-teal-400/10 rounded-lg group-hover:bg-teal-400/20 transition-colors">
                  <FiMail className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">your.email@example.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-teal-400/10 rounded-lg group-hover:bg-teal-400/20 transition-colors">
                  <FiPhone className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-teal-400/10 rounded-lg group-hover:bg-teal-400/20 transition-colors">
                  <FiMapPin className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">Your City, Country</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all resize-none"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-500 transform hover:-translate-y-1 transition-all duration-300 font-semibold shadow-lg hover:shadow-teal-500/25"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


