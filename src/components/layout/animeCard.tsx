"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface AnimeCardProps {
  title: string;
  imageUrl: string;
}

export default function AnimeCard({ title, imageUrl }: AnimeCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
    console.log(
      isFavorited ? "Removed from favorites" : "Added to favorites",
      title
    );
  };
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="relative">
      <Link href={`/anime/${slug}`}>
        <div className="bg-gray-900 rounded overflow-hidden shadow-md hover:shadow-lg transition duration-300 relative bg-cover bg-center hover:border-2 hover:cursor-pointer hover:border-purple-900 group">
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={700}
            className="w-full object-cover"
          />

          {/* Title Overlay */}
          <div className="absolute inset-0 flex items-end justify-center">
            <div className="w-full backdrop-blur-lg py-3 px-4 bg-black/20 group-hover:bg-black/40 transition-colors">
              <h2 className="text-white font-semibold text-sm">{title}</h2>
            </div>
          </div>
        </div>
      </Link>
      {/* Clickable Heart Button */}
      <button
        onClick={toggleFavorite}
        className="absolute top-3 right-3 bg-black/50 p-2 rounded-full hover:bg-red-600 transition-colors flex items-center"
      >
        {isFavorited ? (
          // Filled Heart
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-4 h-4 text-red-500"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        ) : (
          // Outline Heart
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-white group-hover:scale-110 transition-transform"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 6.903a5.753 5.753 0 00-10.21-2.1 5.753 5.753 0 00-10.211 2.1c0 5.56 10.21 11.22 10.21 11.22s10.211-5.66 10.211-11.22z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
