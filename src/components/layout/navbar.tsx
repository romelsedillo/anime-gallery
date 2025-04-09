import React from "react";
import Link from "next/link";
import { ModeToggle } from "./modeToggle";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full max-w-7xl fixed z-20 py-3 px-8 flex items-center justify-between bg-gradient-to-r from-purple-600 to-indigo-600">
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold text-primary">
          Anime Gallery
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <input
          placeholder="Search anime..."
          className="w-sm px-4 py-2 outline-none border-2 focus:border-purple-700 rounded-lg"
        />
      </div>
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
              href="/favorites"
              className="text-sm font-medium hover:underline"
            >
              Favorites
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <ModeToggle />
        <Menu className="md:hidden w-5 h-5 text-gray-300 cursor-pointer hover:text-purple-500 transition-colors" />
      </div>
    </nav>
  );
};

export default Navbar;
