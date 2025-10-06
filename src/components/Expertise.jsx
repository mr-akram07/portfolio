import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Expertise({ expertise }) {
    return (
        <section
            id="expertise"
            className="md:flex md:space-x-10 px-6 py-10 overflow-hidden bg-gray-800/50 backdrop-blur-sm flex-col md:flex-row border-t border-b border-gray-700 relative transition-colors"
            data-aos="fade-up"
        >
            {/* Decorative divider */}
            <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 transform rotate-12 origin-top-right translate-x-1/2"></div>
            <div className="md:w-full relative z-10">
                <h2 className="text-3xl font-bold mb-8 border-l-4 border-blue-500 pl-3">My Expertise</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4" data-aos="fade-up">
                    {expertise.map((expert, i) => {
                        const [ref, inView] = useInView({
                            triggerOnce: true,
                            threshold: 0.3,
                        });

                        return (
                            <div key={i} ref={ref} className="hover:scale-101 bg-gray-700/50 p-4 rounded-2xl hover:border border-gray-300/30 backdrop-blur-md" data-aos="fade-up">
                                <div className="flex justify-between mb-1 ">
                                    <span className="font-medium">{expert.name}</span>
                                    <span>{expert.percent}%</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                                    <motion.div
                                        className="bg-blue-500 h-4 rounded-full shadow-lg shadow-blue-500/30"
                                        initial={{ width: 0 }}
                                        animate={inView ? { width: `${expert.percent}%` } : { width: 0 }}
                                        transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.1 }}
                                    />
                                </div>
                                <div className="flex flex-wrap gap-2 my-2">
                                    {expert.tags.map((tag, i) => (
                                        <span key={i} className="mt-1 text-xs px-2 py-1 rounded-full bg-white/10 border-1 border-gray-500 text-white/90">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Expertise