import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-8 flex flex-col w-full">
      <div className="flex items-center justify-center gap-4 w-full">
        <FaGithub />
        <FaLinkedin />
      </div>
      <div className="w-full text-center flex items-center justify-center mt-2">
        <p>&copy; 2025 Anime Gallery | All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
