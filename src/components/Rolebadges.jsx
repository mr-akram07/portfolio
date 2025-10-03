// RoleBadges.jsx

import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // 👈 New Import

export default function RoleBadges({rolesData}) {
  const [inViewRef, inView] = useInView({ // 👈 New: Setup useInView for animation trigger
    triggerOnce: true,
    threshold: 0.3,
  });
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section id="skills" className="py-10 px-6 bg-gray-900 border-b border-gray-700" ref={inViewRef}>  {/*👈 Attach ref to the section*/}
      <h2 className="text-4xl font-bold mb-4 border-l-4 border-blue-500 pl-3" data-aos="fade-up">Skills</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {rolesData.map((role, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-2xl border border-gray-700/70 hover:border-blue-500 transition duration-300 transform hover:scale-[1.02] flex flex-col justify-between" // Added flex-col
            variants={itemVariants}
          >
            <div> {/* Icon and Description Container */}
              <div className={`text-4xl mb-4 ${role.color}`}>
                <role.icon />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{role.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{role.description}</p>
            </div>

            {/* NEW: Percentage Bar */}
            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex justify-between mb-1 text-sm font-medium">
                <span>Proficiency</span>
                <span className={role.color}>{role.percent}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  className={`h-2.5 rounded-full shadow-lg ${
                    role.color === "text-blue-500" ? "bg-blue-500" :
                    role.color === "text-purple-500" ? "bg-purple-500" :
                    role.color === "text-yellow-500" ? "bg-yellow-500" :
                    "bg-green-500" // Default to green
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: inView ? `${role.percent}%` : 0 }}
                  transition={{ duration: 1.5, ease: 'easeOut', delay: index * 0.1 }} // Added delay for individual bar effect
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}