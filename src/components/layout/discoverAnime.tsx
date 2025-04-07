import React from "react";
import blackClover from "@/images/black-clover.jpg";
import blackLagoon from "@/images/black-lagoon.jpg";
import deathNote from "@/images/death-note.jpg";
import jigokuraku from "@/images/jigokuraku.jpg";
import sakamotoDays from "@/images/sakamoto-days.jpg";
import soloLeveling from "@/images/solo-leveling.jpg";
import tokyoRevengers from "@/images/tokyo-revengers.jpg";
import windBreaker from "@/images/wind-breaker.jpg";
import AnimeCard from "./animeCard";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {animeList.map((anime, index) => (
            <AnimeCard
              key={index}
              title={anime.title}
              imageUrl={anime.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverAnime;
