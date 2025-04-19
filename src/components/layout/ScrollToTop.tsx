"use client";

import React from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className=" absolute right-5 cursor-pointer animate-pulse border-2 border-[#00FF85] w-8 h-8 rounded flex items-center justify-center"
    >
      <FaArrowUp className="w-4 h-4" />
    </button>
  );
};

export default ScrollToTop;
