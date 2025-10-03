// Contact.jsx

import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const recipientEmail = "makram4653@gmail.com";

  return (
    <section 
      id="contact" 
      className="p-6 md:p-10 bg-gray-800 border-t border-gray-700 transition-colors"
    >
      <h2 className="text-3xl font-bold mb-6 md:mb-8 border-l-4 border-blue-500 pl-3">Contact Me</h2>
      
      {/* Container for the Two-Column Layout */}
      <div className="flex flex-col md:flex-row md:space-x-4 items-start">
        
        {/* === Left Side: Email and Social Icons === */}
        {/* On mobile, this takes w-full before stacking */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <p className="text-gray-300 mb-3 md:mb-4 text-lg font-medium">
            Send me an email directly or connect on social media.
          </p>
          <p className="text-gray-300 mb-6 md:mb-8">
            Email: <a href={`mailto:${recipientEmail}`} className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">{recipientEmail}</a>
          </p>

          <div className="flex space-x-4">
            <a href="https://www.instagram.com/mr_akram_z4?utm_source=qr&igsh=eXN3YjJybG5sOG1n " className="p-3 rounded-full transition bg-pink-600 hover:bg-pink-700 text-white" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/mohdakram07?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="p-3 rounded-full transition bg-blue-700 hover:bg-blue-800 text-white" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://x.com/mr_akram_z4?s=08" className="p-3 rounded-full transition bg-gray-700 hover:bg-gray-900 text-white" aria-label="X (Twitter)"><FaXTwitter /></a>
            <a href="http://github.com/mr-akram07" className="p-3 rounded-full transition bg-gray-700 hover:bg-gray-900 text-white" aria-label="GitHub"><FaGithub /></a>
          </div>
        </div>
        
        {/* === Right Side: Contact Form === */}
        {/* On mobile, this takes w-full before stacking */}
        <div className="md:w-1/2 w-full"> 
          <form
            action={`mailto:${recipientEmail}?subject=Message from Portfolio Contact Form`}
            method="POST"
            encType="text/plain"
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="Name"
                required
                // FIX: Removed max-w-sm to ensure full width on mobile
                className="w-full px-2 py-1.5 md:p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="Email"
                required
                // FIX: Removed max-w-sm to ensure full width on mobile
                className="w-full px-2 py-1.5 md:p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                name="Message"
                rows="4"
                required
                // FIX: Removed max-w-sm to ensure full width on mobile
                className="w-full px-2 py-1.5 md:p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Send Message
            </button>
          </form>
        </div>
        
      </div>
    </section>
  );
}