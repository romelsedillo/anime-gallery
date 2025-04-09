import React from "react";
import soloLevelingHero from "@/images/solo-leveling-hero.jpg";

const Hero = () => {
  return (
    <div id="home" className="pt-16">
      <div
        className="relative w-full h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${soloLevelingHero.src})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        <div className="relative max-w-4xl px-4 py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Welcome to the Ultimate Anime Gallery
          </h1>
          <p className="mt-6 max-w-lg text-xl text-gray-300">
            Explore and discover your favorite anime characters, scenes, and
            series from the most popular anime shows!
          </p>
          <div className="mt-10">
            <button className="inline-block bg-white text-purple-700 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition">
              <span>Start Exploring</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
