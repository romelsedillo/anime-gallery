import Image from "next/image";
import React from "react";

type Anime = {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      large_image_url: string;
    };
  };
  aired?: {
    prop?: {
      day?: number;
      month?: number;
      year?: number;
    };
  };
};

type AnimeCardProps = {
  anime: Anime;
  releaseDate?: string;
};

const AnimeCard: React.FC<AnimeCardProps> = ({ anime, releaseDate }) => {
  return (
    <div className="w-full sm:max-w-[180px] mx-auto mb-2">
      <div className="overflow-hidden rounded">
        <Image
          loading="lazy"
          src={anime.images.jpg.large_image_url}
          alt={anime.title || "Anime Poster"}
          width={335}
          height={473}
          className="w-full lg:w-[180px] lg:h-[254px] object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <h2 className="text-[#E0E0E0] line-clamp-2 font-semibold text-lg w-full break-words text-left">
        {anime.title}
      </h2>
      {releaseDate && (
        <p className="text-xs text-[#00FF85] mt-1">{releaseDate}</p>
      )}
    </div>
  );
};

export default AnimeCard;
