import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ScrollToTop from "./ScrollToTop";

const Footer = () => {
  return (
    <div className="py-4 mt-20 flex flex-col w-full">
      <ScrollToTop />
      <div className="text-[#00FF85] flex items-center justify-center gap-4 w-full">
        <FaGithub className="w-6 h-6" />
        <FaLinkedin className="w-6 h-6" />
      </div>
      <div className="text-[#FFFFFF] w-full text-center flex items-center justify-center mt-2">
        <p>&copy; 2025 Anime Gallery | All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
