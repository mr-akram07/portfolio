// Projects.jsx

import ProjectCard from "./ProjectCard"; // Make sure the path is correct

export default function Projects({ projects }) {
  return (
    <section id="projects" className="relative container mx-auto py-10 px-6 overflow-hidden" data-aos="fade-up">
      <div className="absolute inset-0 rounded-lg 
          bg-[radial-gradient(circle_at_center,_#253041_0%,_transparent_75%)] 
          border-y border-gray-700 
          opacity-70 transition-colors">
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-blue-400 opacity-50 blur-sm animate-pulse-slow"></div>
      <div className="absolute top-3/4 right-1/3 w-2 h-2 rounded-full bg-purple-400 opacity-50 blur-sm animate-pulse-slow animation-delay-500"></div>
      <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-green-400 opacity-50 blur-sm transform rotate-45 animate-pulse-slow animation-delay-1000"></div>
      <div className="absolute top-1/2 right-0 w-8 h-8 bg-blue-500/20 blur-xl"></div>
      
      <h2 className="text-3xl font-bold mb-8 border-l-4 border-blue-500 pl-3 relative z-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {projects.map((project, idx) => (
          <div key={idx}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}