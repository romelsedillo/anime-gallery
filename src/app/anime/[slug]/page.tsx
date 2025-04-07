"use client";
import React, { useState } from "react";
import soloLeveling from "@/images/solo-leveling.jpg";
import soloLevelingS2 from "@/images/solo-leveling-S2.jpg";
import blackClover from "@/images/black-clover.jpg";
import blackLagoon from "@/images/black-lagoon.jpg";
import deathNote from "@/images/death-note.jpg";
import Image from "next/image";
import Navbar from "@/components/layout/navbar";

const animeList = [
  {
    title: "Solo Leveling",
    subtitle: "Na Honjaman Level-Up, Ore dake Level Up na Ken",
    imageUrl: soloLeveling,
    description:
      "E-class hunter Jinwoo Sung is the weakest of them all. Looked down on by everyone, he has no money, no abilities to speak of, and no other job prospects. So when his party finds a hidden dungeon, he's determined to use this chance to change his life for the better... but the opportunity he finds is a bit different from what he had in mind!",
  },
];

const AnimeDetails = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };
  const anime = animeList[0];

  return (
    <>
      <Navbar />
      <div className="flex flex-col max-w-5xl mx-auto py-24 px-6">
        <div className="flex">
          <div className="w-1/3 max-w-2xl rounded overflow-hidden shadow-lg">
            <Image
              src={anime.imageUrl}
              alt={anime.title}
              className="object-cover w-full"
              width={480}
              height={720}
            />
          </div>
          <div className="w-2/3 px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-6">{anime.title}</h1>
              <h1 className="text-xl font-bold mb-6">{anime.subtitle}</h1>
              <p className="text-lg">{anime.description}</p>
            </div>
            <div className="mt-8">
              <div className="w-full flex gap-4 items-center">
                <div className="flex items-center w-1/2">
                  <button
                    onClick={toggleFavorite}
                    className=" bg-black/50 p-2 rounded-full transition-colors flex items-center cursor-pointer"
                  >
                    {isFavorited ? (
                      // Filled Heart
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-4 h-4 text-red-500"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    ) : (
                      // Outline Heart
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 group-hover:scale-110 transition-transform"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.752 6.903a5.753 5.753 0 00-10.21-2.1 5.753 5.753 0 00-10.211 2.1c0 5.56 10.21 11.22 10.21 11.22s10.211-5.66 10.211-11.22z"
                        />
                      </svg>
                    )}
                  </button>
                  <h3 className="text-xl">
                    {isFavorited ? "Remove from Favorites" : "Add to Favorites"}
                  </h3>
                </div>

                <div className="w-1/2 flex items-center gap-2">
                  <span className="text-xl">Rate:</span>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      className="text-yellow-100 hover:scale-110 transition text-xl cursor-pointer"
                      title={`Rate ${star}`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-8 mt-6">
              <h2 className="text-2xl">
                Episodes: <span className="text-purple-700">12</span>
              </h2>
              <h2 className="text-2xl">
                Year: <span className="text-purple-700">2024</span>
              </h2>
              <h2 className="text-2xl">
                Rate: <span className="text-purple-700">8.8/10</span>
              </h2>
            </div>
            <div className="space-y-4">
              <h2 className="text-lg font-semibold mb-2">Tags:</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Action",
                  "Fantasy",
                  "Adventure",
                  "Swordplay",
                  "Weak to strong",
                  "Magic",
                ].map((tag) => (
                  <button
                    key={tag}
                    className="px-4 py-1 bg-purple-700 text-sm rounded-full hover:bg-purple-800 transition cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <h1 className="text-2xl mb-4">Related Shows</h1>
          <div className="w-full flex flex-col items-center">
            <div className="w-[300px] h-[200px] overflow-hidden rounded cursor-pointer border-2 border-transparent hover:border-purple-700 transition duration-300">
              <Image
                src={soloLevelingS2}
                alt="Solo Leveling Season 2"
                width={480}
                height={720}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h2 className="text-center text-lg">
              Solo Leveling Season 2: Arise from the Shadow
            </h2>
          </div>
        </div>
        <div className="mt-8 text-center">
          <h1 className="text-2xl mb-4">Similar Shows</h1>
          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col items-center">
              <div className="w-[300px] h-[200px] overflow-hidden rounded cursor-pointer border-2 border-transparent hover:border-purple-700 transition duration-300">
                <Image
                  src={blackClover}
                  alt="Black Clover"
                  width={480}
                  height={720}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h2 className="text-center text-lg">Black Clover</h2>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[300px] h-[200px] overflow-hidden rounded cursor-pointer border-2 border-transparent hover:border-purple-700 transition duration-300">
                <Image
                  src={blackLagoon}
                  alt="Black Lagoon"
                  width={480}
                  height={720}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h2 className="text-center text-lg">Black Lagoon</h2>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[300px] h-[200px] overflow-hidden rounded cursor-pointer border-2 border-transparent hover:border-purple-700 transition duration-300">
                <Image
                  src={deathNote}
                  alt="Death Note"
                  width={480}
                  height={720}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h2 className="text-center text-lg">Death Note</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimeDetails;
