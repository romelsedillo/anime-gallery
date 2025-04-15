"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import AnimeSkeleton from "./AnimeSkeleton";
import { useAnimeStore } from "@/stores/animeStore";
import AnimeCard from "./animeCard";
import { formatDate } from "@/utils/formatDate";

const UpComingSeason = () => {
  const { upcomingAnime, fetchUpcomingAnime, loading } = useAnimeStore();

  useEffect(() => {
    fetchUpcomingAnime();
  }, [fetchUpcomingAnime]);

  return (
    <div id="up-coming" className="px-10 py-20">
      <h2 className="text-2xl font-bold text-[#FFFFFF] mb-6">
        Upcoming Seasons
      </h2>
      <div className="border-b-2 border-[#00FF85] w-full mb-10"></div>

      {loading ? (
        <AnimeSkeleton />
      ) : (
        <div className="max-w-5xl mx-auto grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {upcomingAnime.map((anime, index) => (
            <Link
              href={`/anime/${anime.mal_id}`}
              key={`${anime.mal_id}-${index}`}
              className="group"
            >
              <AnimeCard
                anime={anime}
                releaseDate={formatDate(
                  anime?.aired?.prop?.from?.day,
                  anime?.aired?.prop?.from?.month,
                  anime?.aired?.prop?.from?.year
                )}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default UpComingSeason;
