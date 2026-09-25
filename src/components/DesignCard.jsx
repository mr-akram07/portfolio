// DesignCard.jsx

import { motion } from "framer-motion";

function DesignCard({ sample }) {
    return (
        <motion.div
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 cursor-pointer transform-gpu transition-shadow duration-200 mb-2"
            whileHover={{
                scale: 1.03,
                rotateX: 3,
                rotateY: -3,
                boxShadow: '0 10px 20px -3px rgba(59, 130, 246, 0.4)'
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
        >
            <a href={sample.link} target="_blank" rel="noopener noreferrer">
                <img 
                    src={sample.image} 
                    alt={sample.title} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-48 md:h-52 object-cover transform-gpu" 
                />
            </a>
            <div className="p-4">
                <h3 className="font-bold text-xl mb-2 hover:text-sky-400 transition-colors">
                    <a href={sample.link} target="_blank" rel="noopener noreferrer">{sample.title}</a>
                </h3>
                <div className="flex flex-wrap gap-2 my-2">
                    {sample.tags.map((tag, i) => (
                        <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-white/10 border border-gray-600 text-gray-200">{tag}</span>
                    ))}
                </div>
                <p className="text-gray-300 text-sm mb-3">{sample.desc}</p>
            </div>
        </motion.div>
    );
}

export default DesignCard;