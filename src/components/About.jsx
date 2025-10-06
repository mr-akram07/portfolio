import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  return (
      <section
        id="about"
        className="md:flex md:space-x-10 p-10 bg-gray-800 backdrop-blur-sm flex-col md:flex-row border-t border-b border-gray-700 relative transition-colors"
        data-aos="fade-up"
      >

        <div className="md:w-full mb-6 md:mb-0 relative z-10">
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-blue-500 pl-3">About</h2>
          <p className="text-gray-300 leading-relaxed">
            I am a BCA 2nd-year student passionate about web development, problem-solving, and design. Skilled in C, C++, HTML, CSS, Bootstrap, React, and graphic design. I aim to become a DSA Engineer and Full Stack Developer.
          </p>
        </div>
      </section>
  );
}


export default About