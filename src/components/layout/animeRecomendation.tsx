"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface AnimeEntry {
  mal_id: number;
  title: string;
  url: string;
  images: {
    jpg: {
      large_image_url: string;
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
        console.log(data);

        const entries: AnimeEntry[] = data?.data.flatMap(
          (rec: Recommendation) => rec.entry
        );

        setRecommendations(entries);
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
        <p className="text-center text-[#E0E0E0]">Loading recommendations...</p>
      ) : currentItems.length > 0 ? (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 sm:px-6 md:px-8">
            {currentItems.map((anime) => (
              <Link key={anime.mal_id} href={`/anime/${anime.mal_id}`}>
                <div className="w-full max-w-[200px] mx-auto mb-2">
                  <div className="overflow-hidden rounded">
                    <Image
                      src={
                        anime.images?.jpg?.large_image_url || "/fallback.jpg"
                      }
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

          {/* Pagination */}
          <div className="flex justify-center mt-8 space-x-2 flex-wrap items-center">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded-md text-sm font-medium border bg-white text-gray-800 hover:bg-gray-200 disabled:opacity-50"
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
