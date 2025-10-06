// App.jsx (The Main Component)
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

// Import Components
import FloatingSocialButtons from './Components/Socialbutton.jsx'
import FloatingContactButtons from './Components/ContButton.jsx'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Skills from './Components/Skills.jsx'
import Expertise from './Components/Expertise.jsx'
import Projects from './Components/Projects.jsx'
import Designs from './Components/DesignSample.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'

// Import Data
import { skills, projects, codeLines, designSamples, expertise,} from "../data.js"; // Assuming data.js is in the same directory or adjust path

export default function Portfolio() {
  const [showSocial, setShowSocial] = useState(false);  
  const [mobileMenu, setMobileMenu] = useState(false);


  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen relative
      bg-[radial-gradient(ellipse_at_top,_#1F2937_0%,_#111827_100%)] text-gray-100 transition-colors duration-500">

      <FloatingSocialButtons
        showSocial={showSocial}
        setShowSocial={setShowSocial}
      />

      <FloatingContactButtons/>

      <Navbar
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />

      <main>
        <Hero codeLines={codeLines} />
        <Skills skills={skills} />
        <Expertise expertise={expertise} />
        <Projects projects={projects} />
        <Designs samples={designSamples}/>
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
