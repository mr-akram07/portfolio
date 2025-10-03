// FloatingContactButtons.jsx

import { FaPhoneAlt, FaWhatsapp, FaComments, FaTimes } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoCallOutline } from "react-icons/io5";

export default function FloatingContactButtons() {
    const [isOpen, setIsOpen] = useState(false);
    const socialRef = useRef(null);

    // Auto close social on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (socialRef.current && !socialRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [setIsOpen]);

    // Auto close social on scroll
    useEffect(() => {
        const handleScroll = () => setIsOpen(false);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [setIsOpen]);

    return (
        <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end space-y-3" ref={socialRef}>

            <AnimatePresence>
                {isOpen && (<motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.8 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="flex flex-col items-end space-y-3"
                >
                    {/* WhatsApp Button */}
                    <a
                        href="https://wa.me/919336440702?text=Hello%20I%20want%20to%20connect%20with%20you!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110"
                        title="Chat on WhatsApp"
                    >
                        <FaWhatsapp size={16} />
                    </a>

                    {/* Call Button */}
                    <a
                        href="tel: +919336440702"
                        className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition transform hover:scale-110"
                        title="Call Me"
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
                    setIsOpen(!isOpen);
                }}
                className={`text-white p-4 rounded-full shadow-lg transition transform hover:scale-110 ${isOpen ? 'bg-red-500 hover:bg-red-600 rotate-180' :  'backdrop-blur-xs bg-blue-500/20 hover:bg-blue-700'
                    }`}
                title={isOpen ? "Close Contact Options" : "Open Contact Options"}
            >
                {isOpen ? <FaTimes size={16} /> : <IoCallOutline size={16} />}
            </button>
        </div>
    );
}