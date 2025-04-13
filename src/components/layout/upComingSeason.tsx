"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimeSkeleton from "./AnimeSkeleton";
import { useAnimeStore } from "@/stores/animeStore";

const formatDate = (day?: number, month?: number, year?: number): string => {
  if (!day || !month || !year) return "Date TBA";

  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 sm:px-6 md:px-8">
          {upcomingAnime.map((anime, index) => (
            <Link
              href={`/anime/${anime.mal_id}`}
              key={`${anime.mal_id}-${index}`}
              className="group"
            >
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
                <p className="text-xs text-[#00FF85] mt-1">
                  {formatDate(
                    anime?.aired?.prop?.from?.day,
                    anime?.aired?.prop?.from?.month,
                    anime?.aired?.prop?.from?.year
                  )}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default UpComingSeason;
