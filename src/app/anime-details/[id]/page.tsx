"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const AnimeDetails = () => {
  const [animeDetails, setAnimeDetails] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const id = params?.id;
  useEffect(() => {
    setLoading(true);
    if (!id) return;
    const getAnimeDetails = async () => {
      try {
        const res = await axios.get(
          `https://api.jikan.moe/v4/anime/${id}/full`
        );
        const data = await res.data.data;
        setAnimeDetails(data);
        console.log(data);
      } catch (err) {
        if (axios.isAxiosError(err) && err.response?.status === 404) {
          notFound();
        }
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getAnimeDetails();
  }, [id]);

  return (
    <div className="max-w-7xl px-10 flex flex-col mx-auto">
      <Link
        href="/"
        className="inline-block text-[#00FF85] hover:underline mb-6 px-20"
      >
        ← Back to Home
      </Link>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          <Image
            alt={animeDetails.title || "Anime Poster"}
            src={animeDetails.images?.jpg?.large_image_url || "/fallback.jpg"}
            width={335}
            height={473}
            className="w-[335px] h-[473px] object-cover rounded-lg mx-auto"
          />
          <div className="">
            <div className="flex flex-col items-center">
              <div className="w-full">
                <h1 className="text-[#FFFFFF] text-center md:text-left text-4xl font-bold">
                  {animeDetails.title}
                </h1>
                {animeDetails.title_english && (
                  <h2 className="text-center text-xl text-[#FFFFFF] mt-1 md:text-left">
                    {animeDetails.title_english}
                  </h2>
                )}
              </div>
              {animeDetails.synopsis && (
                <p className="text-center text-lg leading-relaxed text-[#FFFFFF] mx-auto md:text-left">
                  {animeDetails.synopsis}
                </p>
              )}
              <div className="flex flex-wrap gap-4 text-lg mt-4">
                <span className="text-[#FFFFFF]">
                  Episodes:{" "}
                  <span className="text-[#00FF85]">
                    {animeDetails.episodes ?? "?"}
                  </span>
                </span>
                <span className="text-[#FFFFFF]">
                  Year:{" "}
                  <span className="text-[#00FF85]">
                    {animeDetails.year ?? "?"}
                  </span>
                </span>
                <span className="text-[#FFFFFF]">
                  Score:{" "}
                  <span className="text-[#00FF85]">
                    {animeDetails.score ?? "?"}/10
                  </span>
                </span>
                <span className="text-[#FFFFFF]">
                  Status:{" "}
                  <span className="text-[#00FF85]">
                    {animeDetails.status ?? "Unknown"}
                  </span>
                </span>
                <span className="text-[#FFFFFF]">
                  Type:{" "}
                  <span className="text-[#00FF85]">
                    {animeDetails.type ?? "?"}
                  </span>
                </span>
              </div>
            </div>
            {animeDetails.genres?.length > 0 && (
              <div>
                <h3 className="text-[#FFFFFF] text-lg font-semibold mb-2">
                  Genres:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {animeDetails.genres.map((genre) => (
                    <span
                      key={genre.mal_id}
                      className="px-3 py-1 bg-[#00FF85] text-[#0D0D0D] rounded-full text-sm"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {animeDetails.trailer?.youtube_id && (
          <div className="mt-12 w-full max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-white">Trailer</h2>
            <div className="aspect-video mx-auto rounded-lg overflow-hidden shadow-md max-w-[700px] max-h-[400px]">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${animeDetails.trailer.youtube_id}`}
                title={`${animeDetails.title} Trailer`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        )}
        {Array.isArray(animeDetails.streaming) &&
          animeDetails.streaming.length > 0 && (
            <div className="mt-8 px-20">
              <h2 className="text-[#FFFFFF] text-xl font-semibold mb-4">
                Available On:
              </h2>
              <ul className="text-[#FFFFFF] space-y-2 list-disc list-inside">
                {animeDetails.streaming.map((stream) => (
                  <li key={stream.name}>
                    <a
                      href={stream.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00FF85] underline"
                    >
                      {stream.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
      </div>
    </div>
  );
};

export default AnimeDetails;
