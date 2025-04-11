"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface UpcomingAnime {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  year: number;
  season: string;
}

const UpComingSeason = () => {
  const [upcomingAnime, setUpcomingAnime] = useState<UpcomingAnime[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUpcomingAnime = async () => {
      try {
        const res = await fetch("https://api.jikan.moe/v4/seasons/upcoming");
        const data = await res.json();
        setUpcomingAnime(data.data || []);
        console.log(data);
      } catch (err) {
        console.error("Failed to fetch upcoming anime", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUpcomingAnime();
  }, []);

  return (
    <div className="px-6 py-12">
      <h2 className="text-2xl font-bold text-[#FFFFFF] mb-6">Upcoming Anime</h2>
      <div className="border-b-2 border-[#00FF85] w-full mb-10"></div>

      {loading ? (
        <p className="text-center text-gray-400">Loading upcoming anime...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {upcomingAnime.map((anime) => (
            <Link
              href={`/anime/${anime.mal_id}`}
              key={anime.mal_id}
              className="group"
            >
              <div className="bg-[#1A1A1A] rounded-lg p-2 shadow-md border border-[#00FF85]/20 hover:scale-105 transition-transform">
                <Image
                  src={anime.images.jpg.image_url}
                  alt={anime.title}
                  width={200}
                  height={280}
                  className="w-full h-[280px] object-cover rounded"
                />
                <div className="mt-3 text-left">
                  <p className="text-white text-sm font-semibold line-clamp-2">
                    {anime.title}
                  </p>
                  <p className="text-xs text-[#00FF85] mt-1">
                    {anime.season
                      ? anime.season.charAt(0).toUpperCase() +
                        anime.season.slice(1)
                      : "Season"}{" "}
                    {anime.year || ""}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default UpComingSeason;
