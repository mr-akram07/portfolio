import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState, useRef } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaShareAlt, FaBars, FaTimes } from "react-icons/fa";
import { useInView } from "react-intersection-observer";


export default function Portfolio() {
  const [showSocial, setShowSocial] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const socialRef = useRef(null);
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Auto close social on scroll
  useEffect(() => {
    const handleScroll = () => setShowSocial(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto close social on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (socialRef.current && !socialRef.current.contains(e.target)) {
        setShowSocial(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const skills = [
    { name: "HTML", percent: 95 },
    { name: "CSS", percent: 90 },
    { name: "JavaScript", percent: 85 },
    { name: "React", percent: 80 },
    { name: "Tailwind CSS", percent: 85 },
  ];

  const projects = [
    { title: "Portfolio Website", desc: "A personal portfolio built with React and Tailwind CSS.", image: "./test.png" },
    { title: "E-commerce Layout", desc: "Frontend layout with product cards and navigation.", image: "./test.png" },
    { title: "Blog Platform", desc: "A full-stack blog platform using Node.js and MongoDB.", image: "./test.png" },
    { title: "Weather App", desc: "A real-time weather app using API integration.", image: "./test.png" }
  ];

  const codeLines = [
    "console.log('Hello, World!');",
    "const x = 10;",
    "function greet() { return 'Hi!'; }",
    "const portfolio = ['HTML', 'CSS', 'JS', 'React'];",
    "console.log('Portfolio loaded');"
  ];

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
    }, 100);
    return () => clearInterval(typingInterval);
  }, [charIndex, lineIndex]);

  const [skillsRef, inView] = useInView({ triggerOnce: true, threshold: 0.3 });


  return (
    // 🚨 MODIFIED: Hard-coded dark background and text color
    <div className="min-h-screen relative
      bg-[radial-gradient(ellipse_at_top,_#1F2937_0%,_#111827_100%)] text-gray-100 transition-colors duration-500">

      {/* Floating Social Buttons */}
      <div
        className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center"
        ref={socialRef}
      >
        <button
          onClick={(e) => {
            e.stopPropagation(); 
            setShowSocial(!showSocial);
          }}
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          <FaShareAlt />
        </button>
        <AnimatePresence>
          {showSocial && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="flex flex-col mt-2"
            >
              <a href="#" className="bg-blue-600 text-white p-3 rounded-full mb-2 flex items-center justify-center hover:bg-blue-700 transition"><FaFacebookF /></a>
              <a href="#" className="bg-blue-400 text-white p-3 rounded-full mb-2 flex items-center justify-center hover:bg-blue-500 transition"><FaTwitter /></a>
              <a href="#" className="bg-blue-700 text-white p-3 rounded-full mb-2 flex items-center justify-center hover:bg-blue-800 transition"><FaLinkedinIn /></a>
              <a href="#" className="p-3 rounded-full flex items-center justify-center bg-gray-700 hover:bg-gray-900 transition text-white"><FaGithub /></a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navbar */}
      {/* 🚨 MODIFIED: Hard-coded dark background, removed transition-colors */}
      <nav className="p-4 bg-gray-800 shadow-md sticky top-0 z-50 flex justify-between items-center" data-aos="fade-down">
        <div className="font-bold text-xl">Akram Ansari</div>
    
        
        <ul className="hidden md:flex space-x-6 font-semibold">
          {/* 🚨 MODIFIED: Removed 'dark:' prefix */}
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
        <button className="md:hidden p-2" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>
      {mobileMenu && (
        // 🚨 MODIFIED: Hard-coded dark background and text, removed 'dark:' prefix
        <div className="md:hidden bg-gray-800 px-4 py-3 space-y-2">
          <a href="#home" className="block hover:text-blue-400" onClick={() => setMobileMenu(false)}>Home</a>
          <a href="#about" className="block hover:text-blue-400" onClick={() => setMobileMenu(false)}>About</a>
          <a href="#skills" className="block hover:text-blue-400" onClick={() => setMobileMenu(false)}>Skills</a>
          <a href="#projects" className="block hover:text-blue-400" onClick={() => setMobileMenu(false)}>Projects</a>
          <a href="#contact" className="block hover:text-blue-400" onClick={() => setMobileMenu(false)}>Contact</a>
        </div>
      )}

      {/* Hero Section */}
      {/* 🚨 MODIFIED: Hard-coded dark background, removed 'dark:' prefix */}
      <section id="home" className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] bg-gray-900 px-6 md:px-20 pt-20 md:pt-0 relative overflow-hidden transition-colors" data-aos="zoom-in">
        
        {/* Background gradient lines */}
        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 z-0"></div>
        <div className="absolute right-1/4 top-0 h-full w-px bg-gradient-to-b from-purple-500/0 via-purple-500/30 to-purple-500/0 z-0 hidden md:block"></div>

        <div className="flex flex-col items-center md:items-start md:w-1/2 space-y-4 relative z-10">
          
          {/* Profile Image Wrapper with Glowing Border Effect */}
          <div className="relative p-1 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 animate-spin-slow">
            <motion.img 
              // 🚨 MODIFIED: Hard-coded dark border color
              src="https://via.placeholder.com/250" 
              alt="Profile" 
              className="rounded-full w-48 h-48 md:w-72 md:h-72 border-4 border-gray-900 block"
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ duration: 1 }} 
            />
            {/* Inner Ring Glow */}
            <div className="absolute inset-0 rounded-full shadow-2xl shadow-blue-500/50 mix-blend-overlay"></div>
          </div>
          
          <motion.div className="text-center md:text-left" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Hi, I'm Akram Ansari</h1>
            {/* 🚨 MODIFIED: Removed 'dark:' prefix */}
            <p className="text-lg md:text-xl text-blue-400 mb-4">BCA 2nd Year | Aspiring Full Stack Developer</p>
          </motion.div>
        </div>
        <div className="md:w-1/2 md:pl-10 w-full mb-6 md:mb-0 relative z-10">
          {/* 🚨 MODIFIED: Hard-coded dark classes */}
          <div className="bg-gray-800 border border-gray-700 text-green-400 font-mono p-4 rounded-lg min-h-[150px] max-h-[250px] md:min-h-[200px] md:max-h-[300px] overflow-y-auto whitespace-pre-wrap shadow-2xl transition-colors">
            {typedText}<span className="animate-pulse">|</span>
          </div>
          <a href="#projects" className="mt-4 inline-block px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 transform hover:scale-105">View Projects</a>
        </div>
      </section>

      {/* About & Skills Section with animated skill bars */}
      {/* 🚨 MODIFIED: Hard-coded dark classes */}
      <section id="about" className="md:flex md:space-x-10 p-10 bg-gray-800/50 backdrop-blur-sm flex-col md:flex-row border-t border-b border-gray-700 relative transition-colors" ref={skillsRef} data-aos="fade-up">
        {/* Diagonal line divider */}
        <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 transform rotate-12 origin-top-right translate-x-1/2"></div>
        
        <div className="md:w-1/2 mb-6 md:mb-0 relative z-10">
          <h2 className="text-3xl font-bold mb-4 border-l-4 border-blue-500 pl-3">About Me</h2>
          {/* 🚨 MODIFIED: Hard-coded dark text color */}
          <p className="text-gray-300 leading-relaxed">I am a BCA 2nd-year student passionate about web development, problem-solving, and design. Skilled in C, C++, HTML, CSS, Bootstrap, React, and graphic design. I aim to become a DSA Engineer and Full Stack Developer.</p>
        </div>
        <div className="md:w-1/2 relative z-10">
          <h2 className="text-3xl font-bold mb-4 border-l-4 border-blue-500 pl-3">Skills</h2>
          <div className="space-y-4">
            {skills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.percent}%</span>
                </div>
                {/* 🚨 MODIFIED: Hard-coded dark background color */}
                <div className="w-full bg-gray-700 rounded-full h-4">
                  <motion.div
                    className="bg-blue-500 h-4 rounded-full shadow-lg shadow-blue-500/30"
                    initial={{ width: 0 }}
                    animate={{ width: inView ? `${skill.percent}%` : 0 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - using permanent dark styling */}
      <section id="projects" className="relative container mx-auto py-10 px-6 overflow-hidden" data-aos="fade-up">
        <div className="absolute inset-0 rounded-lg 
            {/* 🚨 MODIFIED: Hard-coded dark gradient and border */}
            bg-[radial-gradient(circle_at_center,_#253041_0%,_transparent_75%)] 
            border-y border-gray-700 
            opacity-70 transition-colors">
        </div>
        
        {/* NEW BACKGROUND ELEMENTS: Floating/Glowing shapes */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-blue-400 opacity-50 blur-sm animate-pulse-slow"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 rounded-full bg-purple-400 opacity-50 blur-sm animate-pulse-slow animation-delay-500"></div>
        <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-green-400 opacity-50 blur-sm transform rotate-45 animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute top-1/2 right-0 w-8 h-8 bg-blue-500/20 blur-xl"></div>
        
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-blue-500 pl-3 relative z-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {projects.map((project, idx) => (
            <div key={idx}>
              <motion.div 
                // {/* 🚨 MODIFIED: Hard-coded dark card background and border */}
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
                  {/* 🚨 MODIFIED: Hard-coded dark text color */}
                  <p className="text-gray-300">{project.desc}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      {/* 🚨 MODIFIED: Hard-coded dark background and border */}
      <section id="contact" className="p-10 bg-gray-800 border-t border-gray-700 transition-colors">
        <h2 className="text-3xl font-bold mb-4 border-l-4 border-blue-500 pl-3">Contact Me</h2>
        {/* 🚨 MODIFIED: Hard-coded dark text and link color */}
        <p className="text-gray-300 mb-4">
          Email: <a href="mailto:akram@example.com" className="text-blue-400 hover:text-blue-300">akram@example.com</a>
        </p>
        <div className="flex space-x-4">
          <a href="#" className="p-3 rounded-full transition bg-blue-600 hover:bg-blue-700 text-white"><FaFacebookF /></a>
          <a href="#" className="p-3 rounded-full transition bg-blue-400 hover:bg-blue-500 text-white"><FaTwitter /></a>
          <a href="#" className="p-3 rounded-full transition bg-blue-700 hover:bg-blue-800 text-white"><FaLinkedinIn /></a>
          <a href="#" className="p-3 rounded-full transition bg-gray-700 hover:bg-gray-900 text-white"><FaGithub /></a>
        </div>
      </section>

      {/* Footer */}
      {/* 🚨 MODIFIED: Hard-coded dark background, text, and border */}
      <footer className="bg-gray-900 p-4 text-center text-gray-400 border-t border-gray-700 transition-colors">
        © 2025 Mohd Akram. All rights reserved.
      </footer>

    </div>
  );
}