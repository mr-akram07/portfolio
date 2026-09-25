// FloatingSocialButtons.jsx

import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaAngleRight, FaInstagram, FaAngleDown } from "react-icons/fa";
import { useRef, useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";

function FloatingSocialButtons({ showSocial, setShowSocial }) {
  const socialRef = useRef(null);

  // Auto close social on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (socialRef.current && !socialRef.current.contains(e.target)) {
        setShowSocial(false);
      }
    };
    document.addEventListener("click", handleClickOutside, { passive: true });
    return () => document.removeEventListener("click", handleClickOutside);
  }, [setShowSocial]);
  
  // Auto close social on scroll (only if showSocial is true to avoid state churn on every scroll pixel)
  useEffect(() => {
    if (!showSocial) return;
    const handleScroll = () => setShowSocial(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showSocial, setShowSocial]);

  return (
    <div
      className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center will-change-transform"
      ref={socialRef}
    >
      <button
        onClick={(e) => {
          e.stopPropagation(); 
          setShowSocial((prev) => !prev);
        }}
        aria-label="Toggle Social Menu"
        className="bg-gray-800/80 hover:scale-110 text-white p-4 rounded-full shadow-lg hover:bg-gray-700 transition duration-200 transform-gpu"
      >
        {!showSocial ? <FaAngleRight size={16} /> : <FaAngleDown size={16} />}
      </button>
      <AnimatePresence>
        {showSocial && (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex flex-col items-end space-y-3 mt-2 transform-gpu"
          >
            <a href="https://www.instagram.com/mr_akram_z4?utm_source=qr&igsh=eXN3YjJybG5sOG1n" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:scale-110 bg-gray-800 text-white p-3 rounded-full mb-1 flex items-center justify-center hover:bg-gray-700 transition duration-200 transform-gpu"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/mohdakram07?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 bg-gray-800 text-white p-3 rounded-full mb-1 flex items-center justify-center hover:bg-gray-700 transition duration-200 transform-gpu"><FaLinkedinIn /></a>
            <a href="https://x.com/mr_akram_z4?s=08" target="_blank" rel="noopener noreferrer" aria-label="X Twitter" className="hover:scale-110 bg-gray-800 text-white p-3 rounded-full mb-1 flex items-center justify-center hover:bg-gray-700 transition duration-200 transform-gpu"><FaXTwitter /></a>
            <a href="http://github.com/mr-akram07" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:scale-110 p-3 rounded-full flex items-center justify-center bg-gray-800 hover:bg-gray-700 transition duration-200 text-white transform-gpu"><FaGithub /></a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FloatingSocialButtons;