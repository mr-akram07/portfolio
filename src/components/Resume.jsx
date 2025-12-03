// Resume.jsx
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGraduationCap, FaBriefcase, FaDownload, FaUser } from 'react-icons/fa';
import { MdSummarize } from 'react-icons/md';
import { GoDotFill } from 'react-icons/go';

export default function Resume({ResumeData}) {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { summary, education, experience } = ResumeData;

  return (
    <section id="resume" className="relative-container md:space-x-10 px-6 py-10 overflow-hidden bg-gray-900 backdrop-blur-sm flex-col border-t border-b border-gray-700 relative transition-colors" data-aos="fade-up">
      {/* Heading aligned left */}
      <h2 className="text-3xl font-bold mb-8 border-l-4 border-blue-500 pl-3 relative z-10 "> Resume</h2>

      {/* Summary Section */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition mb-10 hover:scale-101">
        <h3 className="text-2xl font-bold mb-4 flex items-center border-b border-gray-700 pb-2">
          <MdSummarize className="mr-2 text-blue-400" /> Summary
        </h3>
        <p className="text-gray-300 flex"><GoDotFill className="mr-2 mt-1 text-blue-400"/>{summary}</p>
      </div>

      <div className="md:flex md:space-x-10 md:space-y-0 space-y-10">
        {/* Education Section */}
        <div className="md:w-1/2 space-y-4">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition hover:scale-101">
            <h3 className="text-2xl font-bold mb-4 flex items-center border-b border-gray-700 pb-2">
              <FaGraduationCap className="mr-2 text-blue-400" /> Education
            </h3>
            <ul className="list-disc list-inside space-y-2">
              {education.map((edu, idx) => (
                <li key={idx} className="flex items-start">
                  <GoDotFill  className="mr-2 mt-1 text-blue-400" />
                  <div>
                    <h4 className="font-bold text-lg">{edu.degree}</h4>
                    <p className="text-gray-300">{edu.institution}</p>
                    <p className="text-gray-400 text-sm">{edu.year}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Experience Section */}
        <div className="md:w-1/2 space-y-4">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition hover:scale-101 ">
            <h3 className="text-2xl font-bold mb-4 flex items-center border-b border-gray-700 pb-2">
              <FaBriefcase className="mr-2 text-green-400" /> Experience
            </h3>
            <ul className="list-disc list-inside space-y-2">
              {experience.map((exp, idx) => (
                <li key={idx} className="flex items-start">
                  <GoDotFill className="mr-2 mt-1 text-green-400" />
                  <div>
                    <h4 className="font-bold text-lg">{exp.role}</h4>
                    <p className="text-gray-300">{exp.company}</p>
                    <p className="text-gray-400 text-sm">{exp.year}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <div className="text-center mt-10">
        <a href="https://drive.google.com/file/d/1v-0UdUPUq8kJ2K9TQ4v5Vb0vWMvOpTxL/view?usp=sharing" className="px-8 py-3 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 transition flex items-center justify-center mx-auto">
          <FaDownload className="mr-2" /> Download Full Resume
        </a>
      </div>
    </section>
  );
}