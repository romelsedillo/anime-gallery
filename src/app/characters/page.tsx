"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import AnimeSkeleton from "@/components/layout/AnimeSkeleton";
import { useAnimeStore } from "@/stores/animeStore";
import CharacterNavbar from "@/components/layout/CharacterNavbar";

const Characters = () => {
  const { animeCharacters, fetchAnimeCharacters, loading } = useAnimeStore();

  useEffect(() => {
    fetchAnimeCharacters();
  }, [fetchAnimeCharacters]);

  return (
    <div className="max-w-7xl flex flex-col mx-auto pt-0 bg-[#121212]">
      <CharacterNavbar />
      <div className="px-10 pt-20">
        <h1 className="text-[#FFFFFF] text-2xl font-bold mb-6 text-left">
          Top Anime Characters
        </h1>
        <div className="border-b-2 border-[#00FF85] w-full mb-10"></div>

        {loading ? (
          <AnimeSkeleton />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 sm:px-6 md:px-8 pb-20">
            {animeCharacters.map((character) => (
              <Link
                href={`/character-details/${character.mal_id}`}
                key={character.mal_id}
                className="group"
              >
                <div className="w-full max-w-[200px] mx-auto mb-2">
                  <div className="overflow-hidden rounded shadow-md">
                    <Image
                      src={character.images.jpg.image_url}
                      alt={character.name}
                      width={200}
                      height={280}
                      className="w-[200px] h-[280px] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h2 className="text-[#FFFFFF] text-md mt-2 font-semibold text-left line-clamp-2">
                    {character.name}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Characters;
