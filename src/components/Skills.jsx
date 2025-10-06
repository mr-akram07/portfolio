// RoleBadges.jsx

import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // 👈 New Import

function Skills({ skills }) {
  const [inViewRef, inView] = useInView({ // 👈 New: Setup useInView for animation trigger
    triggerOnce: true,
    threshold: 0.3,
  });


  return (
    <section id="skills" className="relative-container md:space-x-10 px-6 py-10 overflow-hidden bg-gray-900 backdrop-blur-sm flex-col border-t border-b border-gray-700 relative transition-colors" ref={inViewRef} >  {/*👈 Attach ref to the section*/}
      <h2 className="text-4xl font-bold mb-8 border-l-4 border-blue-500 pl-3" data-aos="fade-up">Skills</h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full "
        data-aos="fade-up"
      >
        {skills.map((skill, index) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.3,
          });
          return (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-2xl border border-gray-700/70 hover:border-blue-500 transition duration-300 transform hover:scale-[1.02] flex flex-col justify-between"
              ref={ref}
            >
              <div>  {/* Icon and Description Container */}
                <div className={`text-4xl mb-4 ${skill.color}`}>
                  <skill.icon />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{skill.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{skill.description}</p>
              </div>

              {/* NEW: Percentage Bar */}
              <div className="mt-4 pt-4 border-t border-gray-700" >
                <div className="flex justify-between mb-1 text-sm font-medium">
                  <span>Proficiency</span>
                  <span className={skill.color}>{skill.percent}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className={`h-2.5 rounded-full shadow-lg ${skill.color === "text-blue-500" ? "bg-blue-500" :
                      skill.color === "text-purple-500" ? "bg-purple-500" :
                        skill.color === "text-yellow-500" ? "bg-yellow-500" :
                          "bg-green-500" // Default to green
                      }`}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.percent}%` } : { width: 0 }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: index * 0.1 }} // Added delay for individual bar effect
                  />
                </div>
              </div>
            </div>
          )

        })}
      </div>
    </section>
  );
}


export default Skills