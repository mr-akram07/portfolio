// AboutSkills.jsx

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutSkills({ skills }) {
  const [skillsRef, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="about" className="md:flex md:space-x-10 p-10 bg-gray-800/50 backdrop-blur-sm flex-col md:flex-row border-t border-b border-gray-700 relative transition-colors" ref={skillsRef} data-aos="fade-up">
      {/* Diagonal line divider */}
      <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 transform rotate-12 origin-top-right translate-x-1/2"></div>
      
      <div className="md:w-1/2 mb-6 md:mb-0 relative z-10">
        <h2 className="text-3xl font-bold mb-4 border-l-4 border-blue-500 pl-3">About Me</h2>
        <p className="text-gray-300 leading-relaxed">I am a BCA 2nd-year student passionate about web development, problem-solving, and design. Skilled in C, C++, HTML, CSS, Bootstrap, React, and graphic design. I aim to become a DSA Engineer and Full Stack Developer.</p>
      </div>
      <div className="md:w-1/2 relative z-10">
        <h2 className="text-3xl font-bold mb-4 border-l-4 border-blue-500 pl-3">My Expertise</h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 ">
          {skills.map((skill, i) => (
            <div key={i}>
              <div className="flex justify-between mb-1">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.percent}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <motion.div
                  className="bg-blue-500 h-4 rounded-full shadow-lg shadow-blue-500/30"
                  initial={{ width: 0 }}
                  animate={{ width: inView ? `${skill.percent}%` : 0 }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}