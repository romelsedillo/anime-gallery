import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full max-w-7xl fixed z-20 py-5 px-8 flex items-center justify-between bg-[#121212] mx-auto -top-1 text-[#00FF85] ">
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold text-[] ">
          Anime Gallery
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <input
          placeholder="Search anime..."
          className="w-sm px-4 py-1 outline-none border-1 text-[#E0E0E0]  border-[#00FF85] rounded-lg"
        />
      </div>
      <div className="hidden md:block">
        <div className="hidden md:block">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm font-medium hover:underline">
              Home
            </Link>
            <Link
              href="/#top-anime"
              className="text-sm font-medium hover:underline"
            >
              Top Anime
            </Link>
            <Link
              href="/#recommendation"
              className="text-sm font-medium hover:underline"
            >
              Recommendation
            </Link>
            <Link
              href="/#up-coming"
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
      <div className="flex items-center space-x-4">
        <Menu className="md:hidden w-5 h-5 text-gray-300 cursor-pointer hover:text-purple-500 transition-colors" />
      </div>
    </nav>
  );
};

export default Navbar;
