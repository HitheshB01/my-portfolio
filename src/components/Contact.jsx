import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-teal-400 mb-8">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-gray-800 text-gray-300 mb-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-gray-800 text-gray-300 mb-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 bg-gray-800 text-gray-300 mb-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 bg-teal-600 text-white rounded-lg hover:bg-teal-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
