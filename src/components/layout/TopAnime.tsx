"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import AnimeSkeleton from "./AnimeSkeleton";
import { useAnimeStore } from "@/stores/animeStore";
import AnimeCard from "./animeCard";

const TopAnime = () => {
  const { topAnime, fetchTopAnime, loading } = useAnimeStore();

  useEffect(() => {
    fetchTopAnime();
  }, [fetchTopAnime]);

  return (
    <div id="top-anime" className="px-10 py-20">
      <h1 className="text-2xl font-bold mb-4 text-left text-white">
        Top Anime
      </h1>
      <div className="border-b-3 border-[#00FF85] w-full mb-10"></div>

      {loading ? (
        <AnimeSkeleton />
      ) : (
        <div className="max-w-5xl mx-auto grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {topAnime.map((anime) => (
            <Link href={`/anime/${anime.mal_id}`} key={anime.mal_id}>
              <AnimeCard anime={anime} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopAnime;
