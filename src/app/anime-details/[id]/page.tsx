"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

type AnimeGenre = {
  mal_id: number;
  name: string;
  type: string;
  url: string;
};

type AnimeTrailer = {
  youtube_id: string | null;
  url: string;
  embed_url: string;
};

type AnimeStreaming = {
  name: string;
  url: string;
};

type AnimeDetailsType = {
  mal_id: number;
  title: string;
  title_english?: string;
  synopsis?: string;
  episodes?: number;
  year?: number;
  score?: number;
  status?: string;
  type?: string;
  images: {
    jpg: {
      image_url: string;
      large_image_url: string;
    };
  };
  genres: AnimeGenre[];
  trailer?: AnimeTrailer;
  streaming: AnimeStreaming[];
};

const AnimeDetails = () => {
  const [animeDetails, setAnimeDetails] = useState<AnimeDetailsType | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const id = params?.id;

  useEffect(() => {
    if (!id) return;
    const getAnimeDetails = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://api.jikan.moe/v4/anime/${id}/full`
        );
        const data = await res.data.data;
        setAnimeDetails(data);
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
    <div className="max-w-7xl flex flex-col mx-auto">
      <Navbar />
      <div className="w-full max-w-5xl mx-auto px-4 border">
        <Link
          href="/"
          className="inline-block text-[#00FF85] hover:underline mb-6 mt-24"
        >
          ← Back to Home
        </Link>
      </div>
      {loading ? (
        <div className="flex flex-col items-center justify-center gap-4 mb-40">
          <div className="w-12 h-12 border-4 border-t-[#00FF85] border-[#0D0D0D] animate-spin rounded-full"></div>
          <div className="text-center text-3xl">Loading. Please wait...</div>
        </div>
      ) : (
        <div className="max-w-5xl px-4 mx-auto border">
          <div className="flex flex-col md:flex-row gap-6">
            <Image
              alt={animeDetails?.title || "Anime Poster"}
              src={
                animeDetails?.images?.jpg?.large_image_url || "/fallback.jpg"
              }
              width={335}
              height={473}
              className="w-[335px] h-[473px] object-cover rounded-lg mx-auto"
            />
            <div className="">
              <div className="flex flex-col items-center">
                <div className="w-full">
                  <h1 className="text-[#FFFFFF] text-center md:text-left text-4xl font-bold">
                    {animeDetails?.title}
                  </h1>
                  {animeDetails?.title_english && (
                    <h2 className="text-center text-xl text-[#FFFFFF] mt-1 md:text-left">
                      {animeDetails.title_english}
                    </h2>
                  )}
                </div>
                {animeDetails?.synopsis && (
                  <p className="text-center text-lg leading-relaxed text-[#FFFFFF] mx-auto md:text-left">
                    {animeDetails.synopsis}
                  </p>
                )}
                <div className="w-full flex flex-wrap gap-4 text-lg mt-4">
                  <span className="text-[#FFFFFF]">
                    Episodes:{" "}
                    <span className="text-[#00FF85]">
                      {animeDetails?.episodes ?? "?"}
                    </span>
                  </span>
                  <span className="text-[#FFFFFF]">
                    Year:{" "}
                    <span className="text-[#00FF85]">
                      {animeDetails?.year ?? "?"}
                    </span>
                  </span>
                  <span className="text-[#FFFFFF]">
                    Score:{" "}
                    <span className="text-[#00FF85]">
                      {animeDetails?.score ?? "?"}/10
                    </span>
                  </span>
                  <span className="text-[#FFFFFF]">
                    Status:{" "}
                    <span className="text-[#00FF85]">
                      {animeDetails?.status ?? "Unknown"}
                    </span>
                  </span>
                  <span className="text-[#FFFFFF]">
                    Type:{" "}
                    <span className="text-[#00FF85]">
                      {animeDetails?.type ?? "?"}
                    </span>
                  </span>
                </div>
              </div>
              {animeDetails?.genres && animeDetails?.genres?.length > 0 && (
                <div>
                  <h3 className="text-[#FFFFFF] text-lg font-semibold mb-2">
                    Genres:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {animeDetails?.genres.map((genre) => (
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

          {animeDetails?.trailer?.youtube_id && (
            <div className="mt-12 w-full max-w-5xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Trailer
              </h2>
              <div className="aspect-video mx-auto rounded-lg overflow-hidden shadow-md max-w-[700px] max-h-[400px]">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${animeDetails?.trailer.youtube_id}`}
                  title={`${animeDetails?.title} Trailer`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          )}
          {Array.isArray(animeDetails?.streaming) &&
            animeDetails.streaming.length > 0 && (
              <div className="mt-8 px-4">
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
      )}
      <Footer />
    </div>
  );
};

export default AnimeDetails;
