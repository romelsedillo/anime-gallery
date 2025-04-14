"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  return (
    <nav className="w-full max-w-7xl fixed z-20 py-5 px-8 flex items-center justify-between bg-[#121212] mx-auto -top-1 text-[#00FF85] ">
      <div className="flex items-center">
        <Link href="/" className="hidden md:block text-xl font-bold">
          Anime Gallery
        </Link>
        <Link href="/" className="md:hidden text-xl font-bold">
          AG
        </Link>
      </div>
      {/* <div className="flex items-center space-x-4">
        <input
          placeholder="Search anime..."
          className="w-sm px-4 py-1 outline-none border-1 text-[#E0E0E0]  border-[#00FF85] rounded-lg"
        />
      </div> */}
      <div className="hidden md:block">
        <div className="hidden md:block">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm font-medium hover:underline">
              Home
            </Link>
            <Link
              href="#top-anime"
              className="text-sm font-medium hover:underline"
            >
              Top Anime
            </Link>
            <Link
              href="#recommendation"
              className="text-sm font-medium hover:underline"
            >
              Recommendation
            </Link>
            <Link
              href="#up-coming"
              className="text-sm font-medium hover:underline"
            >
              Up Coming Seasons
            </Link>
            <Link
              href="/characters"
              className="text-sm font-medium hover:underline"
            >
              Characters
            </Link>
          </div>
        </div>
      </div>
      <div
        onClick={handleClick}
        className="absolute z-10 top-6 right-4 md:hidden flex items-center text-[#00FF85] hover:text-white transition-colors"
      >
        {!open ? <Menu className="w-6 h-6" /> : <X className="w-6 h-6" />}
      </div>
      {open && (
        <div className="absolute top-0 left-0 w-full h-[1500px] bg-[#121212] flex flex-col items-left pt-[60px] pl-10 gap-4">
          <Link
            onClick={handleClick}
            href="/"
            className="text-lg hover:underline"
          >
            Home
          </Link>
          <Link
            onClick={handleClick}
            href="#top-anime"
            className="text-lg hover:underline"
          >
            Top Anime
          </Link>
          <Link
            onClick={handleClick}
            href="#recommendation"
            className="text-lg hover:underline"
          >
            Recommendation
          </Link>
          <Link
            onClick={handleClick}
            href="#up-coming"
            className="text-lg hover:underline"
          >
            Up Coming Seasons
          </Link>
          <Link
            onClick={handleClick}
            href="/characters"
            className="text-lg hover:underline"
          >
            Characters
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
