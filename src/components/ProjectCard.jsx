// ProjectCard.jsx

import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
      className="bg-gray-700 rounded-lg overflow-hidden shadow-lg 
        border border-gray-600 
        cursor-pointer transform-gpu hover:shadow-blue-500/50 transition duration-300 mb-2"
      whileHover={{
        scale: 1.05,
        rotateX: 5,
        rotateY: -5,
        boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.5), 0 4px 6px -2px rgba(59, 130, 246, 0.05)'
      }}
      transition={{ duration: 0.3 }}
    >

      <img src={project.image} alt={project.title} className="w-full h-48 md:h-55 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2 hover:text-sky-500"><a href={project.link}>{project.title}</a></h3>
        <div className="flex flex-wrap gap-2 my-2">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/10 border-1 border-gray-500 text-white/90">{tag}</span>
          ))}
        </div>
        <p className="text-gray-400 text-sm mb-3">{project.desc}</p>

      </div>
    </motion.div>
  );
}


export default ProjectCard