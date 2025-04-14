import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/images/rs-logo3.png";
import { Link } from "react-scroll";
import Github from "../assets/images/github.png";
import { motion } from "framer-motion";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <nav className="fixed mx-auto w-full max-w-6xl py-2 px-4 z-20 flex items-center md:justify-between">
      <div className="w-16">
        <Link
          id="no-border"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className=" cursor-pointer flex items-center gap-2 text-sm font-medium"
        >
          <img
            src={Logo}
            alt="Logo Image"
            className="bg-white rounded-full w-[50px] h-[55px]"
          />
        </Link>
      </div>

      {/* menu */}
      <div className="hidden border mx-auto py-1 px-2 border-slate-500 col-span-8 rounded-lg md:mx-auto md:flex items-center justify-between gap-6 text-xs font-semibold backdrop-blur-md">
        <Link
          to="home"
          smooth={true}
          spy={true}
          duration={500}
          className=" border-slate-900 cursor-pointer hover:mb-1"
        >
          Home
        </Link>
        <Link
          to="projects"
          smooth={true}
          spy={true}
          duration={500}
          className=" border-slate-900 cursor-pointer hover:mb-1"
        >
          Projects
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active"
          className=" border-[#6C63FF] cursor-pointer hover:mb-1"
        >
          About
        </Link>
        <Link
          to="skills"
          href="skills"
          smooth={true}
          spy={true}
          duration={500}
          className="border-[#6C63FF] cursor-pointer hover:mb-1"
        >
          Skills
        </Link>
        <Link
          to="contact"
          href="contact"
          smooth={true}
          spy={true}
          duration={500}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform text-white py-2 rounded-md cursor-pointer hover:scale-105"
          id="no-border"
        >
          Hire Me
        </Link>
      </div>

      {/* GITHUB ICON */}
      <div className="w-16 hidden justify-end md:flex">
        <a
          href="https://github.com/romelsedillo"
          className="hover:scale-110 border p-2 bg-slate-200 rounded-md"
        >
          <motion.img
            src={Github}
            width={30}
            height={30}
            alt="GitHub icon"
            animate={{
              rotate: [0, 360], // Rotates from 0 to 360 degrees
            }}
            transition={{
              repeat: Infinity, // Keeps repeating
              repeatDelay: 3, // Waits 5 seconds before repeating
              duration: 1, // Takes 1 second to complete spin
              ease: "easeInOut",
            }}
          />
        </a>
      </div>
      {/* GITHUB ICON */}

      {/* ----------Hamburger------------- */}

      <div
        onClick={handleClick}
        className=" md:hidden z-10 absolute top-6 right-4"
      >
        {!nav ? (
          <FaBars className="h-6 w-6" />
        ) : (
          <FaTimes className="h-6 w-6" />
        )}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-[0] left-0 w-full h-[1500px] bg-[#fff] flex flex-col items-center pt-[60px]"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;