"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import AnimeSkeleton from "./AnimeSkeleton";
import AnimeCard from "./animeCard";

interface AnimeEntry {
  mal_id: number;
  title: string;
  name: string;
  url: string;
  images: {
    jpg: {
      large_image_url: string;
      image_url: string;
    };
  };
}

interface Recommendation {
  entry: AnimeEntry[];
}

const AnimeRecommendation = () => {
  const [recommendations, setRecommendations] = useState<AnimeEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const res = await fetch(
          "https://api.jikan.moe/v4/recommendations/anime"
        );
        const data = await res.json();
        const entries: AnimeEntry[] = data?.data.flatMap(
          (rec: Recommendation) => rec.entry
        );
        setRecommendations(entries);
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch recommendations", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(recommendations.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = recommendations.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div id="recommendation" className="px-10 py-20">
      <h1 className="text-2xl font-bold mb-4 text-left text-[#E0E0E0]">
        Anime Recommendations
      </h1>
      <div className="border-b-3 border-[#00FF85] w-full mb-10"></div>

      {loading ? (
        <AnimeSkeleton />
      ) : currentItems.length > 0 ? (
        <>
          <div className="max-w-5xl mx-auto grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {currentItems.map((anime, index) => (
              <Link
                key={`${anime.mal_id}-${index}`}
                href={`/anime-details/${anime.mal_id}`}
              >
                <AnimeCard anime={anime} />
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 space-x-2 flex-wrap items-center">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded-md text-sm font-medium border bg-white text-gray-800 hover:bg-gray-200 disabled:opacity-50 cursor-pointer"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  page === currentPage
                    ? "bg-[#00FF85] text-[#121212]"
                    : "bg-white text-gray-800 hover:bg-gray-200"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded-md text-sm font-medium border bg-white text-gray-800 hover:bg-gray-200 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-400">No recommendations found.</p>
      )}
    </div>
  );
};

export default AnimeRecommendation;
