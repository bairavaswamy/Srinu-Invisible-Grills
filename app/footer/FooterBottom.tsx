import React from "react";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";

const FooterBottom: React.FC = () => {
  return (
    <section
      aria-label="Footer bottom section"
      className="border-t border-emerald-800 mt-8 pt-5"
    >
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* Copyright */}
        <p className="text-sm text-gray-200 tracking-wide">
          © {new Date().getFullYear()}{" "}
          <span className="text-[#E78946] font-semibold">
            SRINU INVISIBLE GRILLS
          </span>
          . All Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          
          <a
            href="https://www.facebook.com/srinuinvisiblegrills"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
            className="p-3 rounded-full bg-blue-700 hover:bg-blue-800 
            transition-colors duration-200 focus:outline-none 
            focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <FaFacebookF className="text-white w-4 h-4" />
          </a>

          <a
            href="https://wa.me/919490701200"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="p-3 rounded-full bg-green-600 hover:bg-green-700 
            transition-colors duration-200 focus:outline-none 
            focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <FaWhatsapp className="text-white w-4 h-4" />
          </a>

          <a
            href="https://www.instagram.com/srinuinvisiblegrills"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram profile"
            className="p-3 rounded-full bg-pink-600 hover:bg-pink-700 
            transition-colors duration-200 focus:outline-none 
            focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <FaInstagram className="text-white w-4 h-4" />
          </a>

        </div>
      </div>
    </section>
  );
};

export default FooterBottom;
