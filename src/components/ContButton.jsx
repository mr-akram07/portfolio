// FloatingContactButtons.jsx

import { FaPhoneAlt, FaWhatsapp, FaTimes } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoCallOutline } from "react-icons/io5";

function FloatingContactButtons() {
    const [isOpen, setIsOpen] = useState(false);
    const socialRef = useRef(null);

    // Auto close social on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (socialRef.current && !socialRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside, { passive: true });
        return () => document.removeEventListener("click", handleClickOutside);
    }, [setIsOpen]);

    // Auto close social on scroll (only when isOpen is true)
    useEffect(() => {
        if (!isOpen) return;
        const handleScroll = () => setIsOpen(false);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isOpen, setIsOpen]);

    return (
        <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end space-y-3 will-change-transform" ref={socialRef}>

            <AnimatePresence>
                {isOpen && (<motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="flex flex-col items-end space-y-3 transform-gpu"
                >
                    {/* WhatsApp Button */}
                    <a
                        href="https://wa.me/919336440702?text=Hello%20I%20want%20to%20connect%20with%20you!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-1 bg-gray-900 text-green-400 p-2.5 rounded-full shadow-lg hover:bg-green-500 hover:text-black transition duration-200 transform-gpu hover:scale-110"
                        title="Chat on WhatsApp"
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp size={24} />
                    </a>

                    {/* Call Button */}
                    <a
                        href="tel:+919336440702"
                        className="mr-1 bg-gray-900 text-blue-400 p-3 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition duration-200 transform-gpu hover:scale-110"
                        title="Call Me"
                        aria-label="Call"
                    >
                        <FaPhoneAlt size={16} />
                    </a>
                </motion.div>
                )}
            </AnimatePresence>

            {/* Main Toggle Button */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen((prev) => !prev);
                }}
                className={`text-white p-3 mr-1 rounded-full shadow-lg transition duration-200 transform-gpu hover:scale-110 ${isOpen ? 'bg-red-500 hover:bg-red-600 rotate-180 text-white' : 'bg-blue-600 hover:bg-blue-500 text-white'
                    }`}
                title={isOpen ? "Close Contact Options" : "Open Contact Options"}
                aria-label="Contact Toggle"
            >
                {isOpen ? <FaTimes size={22} /> : <IoCallOutline size={22} />}
            </button>
        </div>
    );
}

export default FloatingContactButtons;