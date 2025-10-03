// ProjectCard.jsx

import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div 
      className="bg-gray-700 rounded-lg overflow-hidden shadow-lg 
        border border-gray-600 
        cursor-pointer transform-gpu hover:shadow-blue-500/50 transition duration-300"
      whileHover={{ 
        scale: 1.05, 
        rotateX: 5, 
        rotateY: -5,
        boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.5), 0 4px 6px -2px rgba(59, 130, 246, 0.05)'
      }}
      transition={{ duration: 0.3 }}
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{project.title}</h3>
        <p className="text-gray-300">{project.desc}</p>
      </div>
    </motion.div>
  );
}