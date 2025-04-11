import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-8 flex flex-col w-full ">
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
