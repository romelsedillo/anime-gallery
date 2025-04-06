import React from "react";
import { Input } from "../ui/input";
import Link from "next/link";
import { ModeToggle } from "./modeToggle";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary">
              Anime Gallery
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex items-center space-x-4">
            <Input placeholder="Search anime..." className="w-64" />
          </div>
          <div className="hidden md:block">
            <div className="hidden md:block">
              <div className="flex items-center gap-4">
                <Link
                  href="/favorites"
                  className="text-sm font-medium hover:underline"
                >
                  Home
                </Link>
                <Link
                  href="/favorites"
                  className="text-sm font-medium hover:underline"
                >
                  Discover
                </Link>
                <Link
                  href="/favorites"
                  className="text-sm font-medium hover:underline"
                >
                  Categories
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
