// Hero.jsx

import { motion } from "framer-motion";
import { useEffect, useState, memo } from "react";

// Sub-component for Typing Effect to avoid re-rendering the whole Hero section on every key stroke
const TypewriterConsole = memo(function TypewriterConsole({ codeLines }) {
  const [typedText, setTypedText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (lineIndex < codeLines.length) {
        if (charIndex < codeLines[lineIndex].length) {
          setTypedText(prev => prev + codeLines[lineIndex][charIndex]);
          setCharIndex(prev => prev + 1);
        } else {
          setTypedText(prev => prev + '\n');
          setLineIndex(prev => prev + 1);
          setCharIndex(0);
        }
      } else {
        setTypedText('');
        setLineIndex(0);
        setCharIndex(0);
      }
    }, 90);
    return () => clearInterval(typingInterval);
  }, [charIndex, lineIndex, codeLines]);

  return (
    <div className="bg-gray-800 border border-gray-700 text-green-400 font-mono p-4 rounded-lg min-h-[150px] max-h-[250px] md:min-h-[200px] md:max-h-[300px] overflow-y-auto whitespace-pre-wrap shadow-2xl transition-colors transform-gpu">
      {typedText}<span className="animate-pulse">|</span>
    </div>
  );
});

function Hero({ codeLines }) {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-center min-h-[700px] bg-gray-900 px-6 md:px-20 pt-20 md:pt-0 relative overflow-hidden transition-colors" data-aos="zoom-in">
        
      {/* Background gradient lines */}
      <div className="absolute right-1/4 top-0 h-full w-px bg-gradient-to-b from-purple-500/0 via-purple-500/30 to-purple-500/0 z-0 hidden md:block pointer-events-none"></div>

      <div className="flex flex-col items-center md:items-start md:w-1/2 space-y-4 relative z-10">
        
        {/* Profile Image Wrapper with Glowing Border Effect */}
        <div className="relative p-1 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 animate-spin-slow transform-gpu will-change-transform">
          <motion.img 
            src="./Profile.jpg" 
            alt="Mohd Akram Profile" 
            loading="eager"
            decoding="async"
            fetchpriority="high"
            className="rounded-full w-48 h-48 md:w-72 md:h-72 border-4 border-gray-900 block object-cover transform-gpu"
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            transition={{ duration: 0.6, ease: "easeOut" }} 
          />
          {/* Inner Ring Glow */}
          <div className="absolute inset-0 rounded-full shadow-2xl shadow-blue-500/50 mix-blend-overlay pointer-events-none"></div>
        </div>
        <div className="flex flex-wrap gap-2 md:flex-row md:gap-x-3 mb-4">
          <span className="border rounded-full px-3 py-1 border-blue-400 bg-gray-800/80 font-bold text-xs md:text-sm">Web Developer • Graphic Designer</span>
          <span className="border rounded-full px-3 py-1 border-blue-400 bg-gray-800/80 font-bold text-xs md:text-sm">Sant Kabir Nagar • India</span>
          <span className="border rounded-full px-3 py-1 border-blue-400 bg-gray-800/80 font-bold text-xs md:text-sm">Since 2025</span>
        </div>
        
        <motion.div className="text-center md:text-left" initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Hi, I'm Mohd Akram</h1>
          <p className="text-lg md:text-xl text-blue-400 mb-4">BCA 3rd Year | MERN Stack Developer | Graphic Designer</p>
        </motion.div>
      </div>
      <div className="md:w-1/2 md:pl-10 w-full mb-6 md:mb-0 relative z-10">
        <TypewriterConsole codeLines={codeLines} />
        <a href="#projects" className="mt-4 inline-block px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 transform-gpu hover:scale-105 shadow-md">View Projects</a>
      </div>
    </section>
  );
}

export default Hero;