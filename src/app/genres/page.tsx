"use client";

import React, { useEffect, useState } from "react";

interface Genre {
  mal_id: number;
  name: string;
  url: string;
}

const Genres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await fetch("https://api.jikan.moe/v4/genres/anime");
        const data = await res.json();
        setGenres(data.data);
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch genres", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGenres();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Anime Genres</h1>

      {loading ? (
        <p className="text-center text-gray-400">Loading genres...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {genres.map((genre) => (
            <a
              key={genre.mal_id}
              href={genre.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple-700 hover:bg-purple-800 rounded-lg text-white text-center transition"
            >
              {genre.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Genres;
