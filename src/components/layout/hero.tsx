import React from "react";
import soloLeveling from "@/images/solo-leveling.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative pt-16">
      <div className="absolute inset-0">
        <Image
          className="w-full h-[600px] object-cover"
          width={600}
          height={600}
          src={soloLeveling}
          alt="Anime hero"
        />
        <div className="absolute inset-0 h-[600px] bg-gradient-to-t from-gray-900 to-transparent" />
      </div>

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
  );
};

export default Hero;
