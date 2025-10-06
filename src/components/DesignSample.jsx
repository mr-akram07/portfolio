// DesignPortfolio.jsx

import DesignCard from "./DesignCard";

function Designs({ samples }) {
  return (
    <section id="designs" className="relative-container md:space-x-10 px-6 py-10 overflow-hidden bg-gray-900 backdrop-blur-sm flex-col border-t border-b border-gray-700 relative transition-colors" data-aos="fade-up">
      <div className="absolute inset-0 rounded-lg 
          border-y border-gray-700 
          opacity-70 transition-colors">
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-blue-400 opacity-50 blur-sm animate-pulse-slow"></div>
      <div className="absolute top-3/4 right-1/3 w-2 h-2 rounded-full bg-purple-400 opacity-50 blur-sm animate-pulse-slow animation-delay-500"></div>
      <div className="absolute top-1/2 right-0 w-8 h-8 bg-blue-500/20 blur-xl"></div>
      
      <h2 className="text-3xl font-bold mb-8 border-l-4 border-blue-500 pl-3 relative z-10">Design Samples</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10" data-aos="zoom-in">
        {samples.map((sample, idx) => (
          <div key={idx}>
            <DesignCard sample={sample} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Designs