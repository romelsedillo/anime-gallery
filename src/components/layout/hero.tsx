import React from "react";
import gutsHeroBg from "@/images/guts-hero-bg.jpg";

const Hero = () => {
  return (
    <div id="home" className="pt-14">
      <div
        className="relative w-full h-[720px] bg-cover bg-center"
        style={{ backgroundImage: `url(${gutsHeroBg.src})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        <div className="relative max-w-4xl px-4 py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-[#FFFFFF] ">
            Welcome to the Ultimate Anime Gallery
          </h1>
          <p className="mt-6 max-w-lg text-xl text-[#E0E0E0] ">
            Explore and discover your favorite anime characters, scenes, and
            series from the most popular anime shows!
          </p>
          <div className="mt-10">
            <button className="inline-block bg-[#00FF85] text-[#0D0D0D] font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition">
              <span>Start Exploring</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
