// components/AnimeCarousel.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import bleach from "@/images/bleach.jpg";
import naruto from "@/images/naruto.jpg";
import attackOnTitan from "@/images/attack-on-titan.jpg";
import demonSlayer from "@/images/demon-slayer.jpg";
import onePiece from "@/images/one-piece.jpg";
import myHeroAcademia from "@/images/my-hero-academia.jpg";
import jujutsuKaisen from "@/images/jujutsu-kaisen.jpg";

const animeList = [
  {
    title: "Attack on Titan",
    imageUrl: attackOnTitan,
  },
  {
    title: "One Piece",
    imageUrl: onePiece,
  },
  {
    title: "Naruto",
    imageUrl: naruto,
  },
  {
    title: "Demon Slayer",
    imageUrl: demonSlayer,
  },
  {
    title: "Jujutsu Kaisen",
    imageUrl: jujutsuKaisen,
  },
  {
    title: "Bleach",
    imageUrl: bleach,
  },
  {
    title: "My Hero Academia",
    imageUrl: myHeroAcademia,
  },
];

export default function AnimeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % animeList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[350px] mx-auto overflow-hidden rounded-2xl shadow-lg">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {animeList.map((anime, index) => (
          <div key={index} className="min-w-[350px] h-[500px] relative">
            <Image
              src={anime.imageUrl}
              alt={anime.title}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
            <div className="absolute bottom-10 left-4 bg-black/50 text-white text-2xl px-3 py-1 rounded-lg">
              {anime.title}
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {animeList.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              currentIndex === index ? "bg-white" : "bg-white/50"
            )}
          />
        ))}
      </div>
    </div>
  );
}
