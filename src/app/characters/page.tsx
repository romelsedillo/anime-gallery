"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Character {
  mal_id: number;
  name: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  url: string;
}

const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopCharacters = async () => {
      try {
        const res = await fetch("https://api.jikan.moe/v4/top/characters");
        const data = await res.json();
        console.log(data);
        setCharacters(data.data || []);
      } catch (err) {
        console.error("Failed to fetch top characters", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTopCharacters();
  }, []);

  return (
    <div className="px-6 py-12">
      <h1 className="text-[#FFFFFF] text-2xl font-bold mb-6 text-left">
        Top Anime Characters
      </h1>
      <div className="border-b-2 border-[#00FF85] w-full mb-10"></div>

      {loading ? (
        <p className="text-center text-[#FFFFFF]">Loading characters...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {characters.map((character) => (
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
  );
};

export default Characters;
