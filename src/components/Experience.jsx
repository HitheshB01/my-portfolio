// import React from 'react';

// const Experience = () => (
//   <section id="experience" className="bg-gray-800 text-white p-8">
//     <h2 className="text-4xl font-bold mb-4">Experience</h2>
//     <p className="text-lg">
//       Developed various web applications and participated in hackathons, winning 1st place at Tech Transform and 2nd at Codexplore.
//     </p>
//   </section>
// );

// export default Experience;


import React from 'react';
import { FaBriefcase, FaGraduationCap, FaAward } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: 'internship',
      title: 'Web Development Intern',
      company: 'Your Company Name',
      period: '2023 - 2024',
      location: 'City, Country',
      description: [
        'Developed responsive web applications using modern frontend technologies',
        'Collaborated with senior developers to implement new features and fix bugs',
        'Gained hands-on experience with React.js and component-based architecture',
        'Participated in code reviews and agile development processes',
        'Worked on real-world projects and contributed to team deliverables'
      ],
      technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'Tailwind CSS'],
      achievements: ['Successfully delivered 3 major features', 'Received positive feedback from team lead']
    }
  ];

  const education = [
    {
      id: 1,
      type: 'education',
      degree: 'Master of Computer Application (MCA)',
      institution: 'Your University Name',
      period: '2022 - 2024',
      location: 'City, State',
      description: [
        'Specialized in Advanced Software Development and Web Technologies',
        'Completed projects in Full-Stack Development and Database Management',
        'Gained expertise in modern programming paradigms and software engineering principles'
      ],
      achievements: ['Dean\'s List', 'Academic Excellence Award']
    },
    {
      id: 2,
      type: 'education',
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Your College Name',
      period: '2019 - 2022',
      location: 'City, State',
      description: [
        'Focused on Computer Science Fundamentals, Data Structures, and Algorithms',
        'Completed courses in Web Development, Database Systems, and Software Engineering'
      ],
      achievements: ['Class Topper', 'Hackathon Participant']
    }
  ];

  const skillsGained = [
    { category: 'Frontend', items: ['React.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'] },
    { category: 'Tools', items: ['Git & GitHub', 'VS Code', 'Chrome DevTools', 'Figma', 'Postman'] },
    { category: 'Professional', items: ['Agile Methodology', 'Code Reviews', 'Team Collaboration', 'Problem Solving'] }
  ];

  return (
    <section id="experience" className="bg-gray-800 text-gray-300 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-teal-400 mb-4">Experience & Education</h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          My professional journey and academic background that shaped my development skills
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-teal-400/10 rounded-lg mr-4">
                <FaBriefcase className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Professional Experience</h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp) => (
                <div 
                  key={exp.id}
                  className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-teal-400/30 transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  {/* Highlight badge for internship */}
                  <div className="absolute -top-3 -right-3 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Internship
                  </div>
                  
                  <div className="flex items-start mb-4">
                    <div className="p-2 bg-teal-400/20 rounded-lg mr-4 group-hover:bg-teal-400/30 transition-colors">
                      <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-teal-400 font-semibold">{exp.company}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-400">{exp.period}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-400">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4 ml-12">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className="text-teal-400 mr-2 mt-1 flex-shrink-0">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Achievements */}
                  {exp.achievements && (
                    <div className="mb-4 ml-12">
                      <div className="flex items-center mb-2">
                        <FaAward className="w-4 h-4 text-yellow-400 mr-2" />
                        <span className="text-yellow-400 font-semibold">Key Achievements</span>
                      </div>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-center">
                            <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 ml-12">
                    {exp.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-gray-800 text-teal-400 rounded-full text-sm font-mono border border-teal-400/30 hover:bg-teal-400/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {/* Skills Gained Section */}
              <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-700">
                <h4 className="text-lg font-bold text-white mb-4 text-center">Skills Gained During Internship</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {skillsGained.map((skillGroup, index) => (
                    <div key={index} className="text-center">
                      <h5 className="text-teal-400 font-semibold mb-3">{skillGroup.category}</h5>
                      <div className="space-y-2">
                        {skillGroup.items.map((skill, idx) => (
                          <div 
                            key={idx}
                            className="bg-gray-800/50 rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-gray-700/50 transition-colors"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-teal-400/10 rounded-lg mr-4">
                <FaGraduationCap className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={edu.id}
                  className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-teal-400/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Timeline line */}
                  {index !== education.length - 1 && (
                    <div className="absolute left-8 top-24 w-0.5 h-20 bg-teal-400/30"></div>
                  )}
                  
                  <div className="flex items-start mb-4">
                    <div className="p-2 bg-teal-400/20 rounded-lg mr-4">
                      <FaGraduationCap className="w-4 h-4 text-teal-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-teal-400 font-semibold">{edu.institution}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-400">{edu.period}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{edu.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4 ml-12">
                    {edu.description.map((item, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className="text-teal-400 mr-2 mt-1 flex-shrink-0">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Achievements */}
                  {edu.achievements && (
                    <div className="flex flex-wrap gap-2 ml-12">
                      {edu.achievements.map((achievement, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-sm border border-yellow-400/30"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Additional Learning */}
              <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-700">
                <h4 className="text-lg font-bold text-white mb-4">Continuous Learning</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Online Courses Completed</span>
                    <span className="text-teal-400 font-semibold">5+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Personal Projects</span>
                    <span className="text-teal-400 font-semibold">10+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Programming Languages</span>
                    <span className="text-teal-400 font-semibold">6+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-teal-400/10 to-blue-400/10 rounded-2xl p-8 border border-teal-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready for the Next Opportunity</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm eager to apply my skills and continue growing as a developer in a professional environment.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-500 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-teal-500/25"
            >
              Let's Work Together
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;