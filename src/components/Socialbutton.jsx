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
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [setShowSocial]);
  
  // Auto close social on scroll
  useEffect(() => {
    const handleScroll = () => setShowSocial(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setShowSocial]);

  return (
    <div
      className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center"
      ref={socialRef}
    >
      <button
        onClick={(e) => {
          e.stopPropagation(); 
          setShowSocial(!showSocial);
        }}
        className="bg-gray-700/30 hover:scale-110 backdrop-blur-xs text-white p-4 rounded-full shadow-lg hover:bg-gray-600 transition"
      >
        {!showSocial ? <FaAngleRight  size={16} /> : <FaAngleDown size={16} />}
      </button>
      <AnimatePresence>
        {showSocial && (
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.8 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="flex flex-col items-end space-y-3 mt-2"
          >
            <a href="https://www.instagram.com/mr_akram_z4?utm_source=qr&igsh=eXN3YjJybG5sOG1n" className="hover:scale-110 bg-gray-700 text-white p-3 rounded-full mb-2 flex items-center justify-center hover:bg-gray-900 transition"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/mohdakram07?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:scale-110 bg-gray-700 text-white p-3 rounded-full mb-2 flex items-center justify-center hover:bg-gray-900 transition"><FaLinkedinIn /></a>
            <a href="https://x.com/mr_akram_z4?s=08" className="hover:scale-110 bg-gray-700 text-white p-3 rounded-full mb-2 flex items-center justify-center hover:bg-gray-900 transition"><FaXTwitter /></a>
            <a href="http://github.com/mr-akram07" className="hover:scale-110 p-3 rounded-full flex items-center justify-center bg-gray-700 hover:bg-gray-900 transition text-white"><FaGithub /></a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


export default FloatingSocialButtons