// App.jsx (The Main Component)

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

// Import Components
import Navbar from "./components/Navbar";
import FloatingSocialButtons from "./components/SocialButton";
import Hero from "./components/Hero";
import AboutSkills from "./components/AboutSkills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Import Data
import { skills, projects, codeLines, rolesData } from "../data"; // Assuming data.js is in the same directory or adjust path
import ContactButtons from "./components/ContButton";
import FloatingContactButtons from "./components/ContButton";
import RoleBadges from "./components/Rolebadges";

export default function Portfolio() {
  const [showSocial, setShowSocial] = useState(false);
  const [showContact, setShowContact] = useState(false);
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

      <ContactButtons
        showContact={showContact}
        setShowContact={setShowContact}
      />

      <Navbar
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />

      <main>
        <Hero codeLines={codeLines} />
        <RoleBadges rolesData={rolesData} />
        <AboutSkills skills={skills} />
        <Projects projects={projects} />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}