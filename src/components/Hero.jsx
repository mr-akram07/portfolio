// Hero.jsx

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Hero({ codeLines }) {
  const [typedText, setTypedText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typing effect logic
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
    }, 100);
    return () => clearInterval(typingInterval);
  }, [charIndex, lineIndex, codeLines]);


  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-center min-h-[700px] bg-gray-900 px-6 md:px-20 pt-20 md:pt-0 relative overflow-hidden transition-colors" data-aos="zoom-in">
        
      {/* Background gradient lines */}
      <div className="absolute right-1/4 top-0 h-full w-px bg-gradient-to-b from-purple-500/0 via-purple-500/30 to-purple-500/0 z-0 hidden md:block"></div>

      <div className="flex flex-col items-center md:items-start md:w-1/2 space-y-4 relative z-10 ">
        
        {/* Profile Image Wrapper with Glowing Border Effect */}
        <div className="relative p-1 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 animate-spin-slow">
          <motion.img 
            src="./Profile.jpg" 
            alt="Profile" 
            className="rounded-full w-48 h-48 md:w-72 md:h-72 border-4 border-gray-900 block"
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            transition={{ duration: 1 }} 
          />
          {/* Inner Ring Glow */}
          <div className="absolute inset-0 rounded-full shadow-2xl shadow-blue-500/50 mix-blend-overlay"></div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:gap-x-3 mb-4">
          <span className="border rounded-full px-3 border-blue-400 backdrop-blur-sm bg-white/10 font-bold">Web Developer • Graphic Designer</span>
          <span className="border rounded-full px-3 border-blue-400 backdrop-blur-sm bg-white/10 font-bold">Sant Kabir Nagar • India</span>
          <span className="border rounded-full px-3 border-blue-400 backdrop-blur-sm bg-white/10 font-bold">Since 2025</span>
        </div>
        
        <motion.div className="text-center md:text-left" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Hi, I'm Mohd Akram</h1>
          <p className="text-lg md:text-xl text-blue-400 mb-4">BCA 2nd Year | Aspiring MERN Stack Developer | Graphic Designer</p>
        </motion.div>
      </div>
      <div className="md:w-1/2 md:pl-10 w-full mb-6 md:mb-0 relative z-10">
        <div className="bg-gray-800 border border-gray-700 text-green-400 font-mono p-4 rounded-lg min-h-[150px] max-h-[250px] md:min-h-[200px] md:max-h-[300px] overflow-y-auto whitespace-pre-wrap shadow-2xl transition-colors">
          {typedText}<span className="animate-pulse">|</span>
        </div>
        <a href="#projects" className="mt-4 inline-block px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 transform hover:scale-105">View Projects</a>
      </div>
    </section>
  );
}


export default Hero