import Image from "next/image";
import React from "react";
import blackClover from "@/images/black-clover.jpg";
import blackLagoon from "@/images/black-lagoon.jpg";
import deathNote from "@/images/death-note.jpg";
import jigokuraku from "@/images/jigokuraku.jpg";
import sakamotoDays from "@/images/sakamoto-days.jpg";
import soloLeveling from "@/images/solo-leveling.jpg";
import tokyoRevengers from "@/images/tokyo-revengers.jpg";
import windBreaker from "@/images/wind-breaker.jpg";

const animeList = [
  {
    title: "Black Clover",
    imageUrl: blackClover,
  },
  {
    title: "Black Lagoon",
    imageUrl: blackLagoon,
  },
  {
    title: "Death Note",
    imageUrl: deathNote,
  },
  {
    title: "Hell's Paradise: Jigokuraku",
    imageUrl: jigokuraku,
  },
  {
    title: "Sakamoto Days",
    imageUrl: sakamotoDays,
  },
  {
    title: "Solo Leveling",
    imageUrl: soloLeveling,
  },
  {
    title: "Tokyo Revengers",
    imageUrl: tokyoRevengers,
  },
  {
    title: "Wind Breaker",
    imageUrl: windBreaker,
  },
];

const DiscoverAnime = () => {
  return (
    <section id="discover" className="py-16 px-6 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Discover New Anime
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {animeList.map((anime, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 relative bg-cover bg-center hover:border-2 hover:cursor-pointer hover:border-purple-900"
            >
              <Image
                src={anime.imageUrl}
                alt={anime.title}
                width={400}
                height={700}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 flex items-end justify-center">
                <div className="w-full backdrop-blur-lg py-3 px-4 bg-black/50">
                  <h2 className="text-white text-lg font-semibold">
                    {anime.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverAnime;
