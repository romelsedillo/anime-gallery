"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopAnimeSkeleton from "./TopAnimeSkeleton";

type Anime = {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      large_image_url: string;
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

  return (
    <div id="top-anime" className="px-10 py-20">
      <h1 className="text-2xl font-bold mb-4 text-left text-white">
        Top Anime
      </h1>
      <div className="border-b-3 border-[#00FF85] w-full mb-10"></div>

      {loading ? (
        <TopAnimeSkeleton />
      ) : animeList.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 sm:px-6 md:px-8">
          {animeList.map((anime) => (
            <Link href={`/anime/${anime.mal_id}`} key={anime.mal_id}>
              <div className="w-full max-w-[200px] mx-auto mb-2">
                <div className=" overflow-hidden rounded">
                  <Image
                    src={anime.images.jpg.large_image_url}
                    alt={anime.title}
                    width={335}
                    height={473}
                    className="w-[200px] h-[282px] object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h2 className="text-[#E0E0E0] line-clamp-2 font-semibold text-lg w-full break-words text-left">
                  {anime.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400">No anime found.</p>
      )}
    </div>
  );
};

export default TopAnime;
