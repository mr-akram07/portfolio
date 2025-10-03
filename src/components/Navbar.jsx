// Navbar.jsx

import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "#home", text: "Home" },
  { href: "#skills", text: "Skills" },
  { href: "#about", text: "About" },
  { href: "#projects", text: "Projects" },
  { href: "#contact", text: "Contact" },
];

export default function Navbar({ mobileMenu, setMobileMenu }) {
  return (
    <>
      {/* Navbar */}
      <nav className="p-4 bg-gray-800 shadow-md sticky top-0 z-50 flex justify-between items-center" data-aos="fade-down">
        <div className="font-bold text-xl">Mohd Akram</div>

        <ul className="hidden md:flex space-x-6 font-semibold">
          <li >
            {/* Desktop Resume Button */}
            <a href="#notuploaded" className="hover:bg-sky-600 bg-sky-500 p-2 text-center rounded-md px-5">Resume</a>
          </li>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-blue-400">{link.text}</a>
            </li>
          ))}
        </ul>
        <div className="md:hidden lg:hidden flex items-center space-x-2">
          {/* Mobile Resume Button (Always Visible) */}
          <a href="#notuploaded" className="bg-sky-500 text-white p-2 text-sm text-center rounded-md px-3 font-semibold hover:bg-sky-600 transition duration-300" > Resume </a>

          {/* Mobile Menu Toggle Button */}
          <button className="p-2" onClick={() => setMobileMenu(!mobileMenu)}> {mobileMenu ? <FaTimes size={24} /> : <FaBars size={24} />} </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden fixed top-[69px] left-0 right-0 bg-gray-100 dark:bg-gray-800 px-4 py-3 space-y-2 z-40 shadow-xl overflow-hidden" >

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block hover:text-blue-400"
              onClick={() => setMobileMenu(false)}
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
    </>
  );
}