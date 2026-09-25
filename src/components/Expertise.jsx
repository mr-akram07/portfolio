// Expertise.jsx

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Expertise({ expertise }) {
    const [sectionRef, inView] = useInView({
        triggerOnce: true,
        threshold: 0.15,
    });

    return (
        <section
            id="expertise"
            ref={sectionRef}
            className="md:flex md:space-x-10 px-6 py-10 overflow-hidden bg-gray-800/60 flex-col md:flex-row border-t border-b border-gray-700 relative transition-colors"
            data-aos="fade-up"
        >
            {/* Decorative divider */}
            <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 transform rotate-12 origin-top-right translate-x-1/2 pointer-events-none"></div>
            <div className="md:w-full relative z-10">
                <h2 className="text-3xl font-bold mb-8 border-l-4 border-blue-500 pl-3">My Expertise</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4" data-aos="fade-up">
                    {expertise.map((expert, i) => (
                        <div key={i} className="hover:scale-[1.01] bg-gray-700/30 p-4 rounded-2xl border border-gray-600/30 transition duration-200 transform-gpu">
                            <div className="flex justify-between mb-1">
                                <span className="font-medium text-white">{expert.name}</span>
                                <span className="text-blue-400 font-semibold">{expert.percent}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-3.5 overflow-hidden">
                                <motion.div
                                    className="bg-blue-500 h-3.5 rounded-full shadow-md shadow-blue-500/30 transform-gpu"
                                    initial={{ width: 0 }}
                                    animate={inView ? { width: `${expert.percent}%` } : { width: 0 }}
                                    transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.05 }}
                                />
                            </div>
                            <div className="flex flex-wrap gap-2 my-2">
                                {expert.tags.map((tag, tagIdx) => (
                                    <span key={tagIdx} className="mt-1 text-xs px-2 py-0.5 rounded-full bg-white/10 border border-gray-500/50 text-gray-200">{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Expertise;