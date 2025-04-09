"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/navbar";

type Anime = {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
};

const TopAnime = () => {
  const [animeList, setAnimeList] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopAnime = async () => {
      try {
        const res = await fetch("https://api.jikan.moe/v4/top/anime");
        const data = await res.json();
        setAnimeList(data.data);
      } catch (err) {
        console.error("Failed to fetch top anime", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTopAnime();
  }, []);

  if (loading) {
    return (
      <div className="text-white text-center py-10">Loading top anime...</div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="px-6 py-20">
        <h1 className="text-3xl font-bold text-white mb-6">Top Anime</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {animeList.map((anime) => (
            <Link href={`/anime/${anime.mal_id}`} key={anime.mal_id}>
              <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-md transition duration-300 border-2 border-transparent hover:border-purple-700 cursor-pointer group">
                <Image
                  src={anime.images.jpg.image_url}
                  alt={anime.title}
                  width={400}
                  height={600}
                  className="w-full h-[350px] object-cover"
                />
                <div className="absolute inset-0 flex items-end justify-center">
                  <div className="w-full backdrop-blur-lg py-3 px-4 bg-black/20 group-hover:bg-black/40 transition-colors">
                    <h2 className="text-white font-semibold text-sm line-clamp-2">
                      {anime.title}
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopAnime;
