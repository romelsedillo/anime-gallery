"use client";

import React, { useEffect, useState } from "react";

// Import your 5 hero background images
import bg1 from "@/images/home-bg/guts.jpg";
import bg2 from "@/images/home-bg/blue-lock.jpg";
import bg3 from "@/images/home-bg/my-hero-academia.jpg";
import bg4 from "@/images/home-bg/solo-leveling.jpg";
import bg5 from "@/images/home-bg/sung-jinwoo.jpg";

const images = [bg1, bg2, bg3, bg4, bg5];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="pt-14 relative w-full h-[720px] overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${img.src})` }}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 py-32 sm:px-6 lg:px-8">
        <h1 className="text-center text-5xl font-bold tracking-tight sm:text-5xl md:text-left lg:text-6xl text-[#FFFFFF]">
          Welcome to the Ultimate Anime Gallery
        </h1>
        <p className="mt-6 text-xl max-w-xl text-[#E0E0E0] text-center md:text-left">
          Explore and discover your favorite anime characters, scenes, and
          series from the most popular anime shows!
        </p>
        <div className="mt-10 flex justify-center md:justify-start">
          <button className="inline-block bg-[#00FF85] text-[#0D0D0D] font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition">
            <span>Start Exploring</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
