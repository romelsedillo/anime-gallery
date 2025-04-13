"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import CharacterNavbar from "@/components/layout/CharacterNavbar";

interface Character {
  mal_id: number;
  name: string;
  about: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
}

interface AnimeAppearance {
  role: string;
  anime: {
    mal_id: number;
    title: string;
    images: {
      jpg: {
        large_image_url: string;
      };
    };
  };
}

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character | null>(null);
  const [animeAppearances, setAnimeAppearances] = useState<AnimeAppearance[]>(
    []
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchCharacterDetails = async () => {
      try {
        const res = await fetch(
          `https://api.jikan.moe/v4/characters/${id}/full`
        );
        const data = await res.json();
        setCharacter(data.data);
        console.log(data);

        const animeRes = await fetch(
          `https://api.jikan.moe/v4/characters/${id}/anime`
        );
        const animeData = await animeRes.json();
        setAnimeAppearances(animeData.data || []);
      } catch (err) {
        console.error("Failed to fetch character details", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacterDetails();
  }, [id]);

  return (
    <div className="w-full max-w-7xl mt-16 flex flex-col mx-auto">
      <CharacterNavbar />
      <div className="pt-4 pb-20">
        <Link
          href="/characters"
          className="inline-block text-[#00FF85] hover:underline mb-6 px-20"
        >
          ← Back to Characters
        </Link>
        {loading ? (
          <div>
            <div className="flex justify-center items-center mt-16">
              <div className="animate-spin rounded-full h-10 w-10 border-4 border-[#00FF85] border-t-transparent"></div>
            </div>
            <p className="text-center mt-4 text-[#FFFFFF]">
              Loading character details...
            </p>
          </div>
        ) : (
          <div className="mx-auto text-white px-20">
            {/* Character Header */}
            <div className="w-full flex flex-col md:flex-row items-start gap-8 mb-12">
              <Image
                src={character?.images.jpg.image_url || "/fallback.jpg"}
                alt={character?.name || "Character"}
                width={300}
                height={400}
                className="w-full max-w-[250px] rounded-md object-cover shadow-md"
              />
              <div className="w-full">
                <h1 className="text-3xl font-bold mb-4">{character?.name}</h1>
                <p className="text-sm whitespace-pre-line">
                  {character?.about || "No bio available."}
                </p>
              </div>
            </div>

            {/* Anime Appearances */}
            <h2 className="text-2xl font-semibold mb-4 inline-block">
              Anime Appearances
            </h2>
            <div className="border-b-3 border-[#00FF85] w-full mb-10"></div>

            {animeAppearances.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 sm:px-6 md:px-8">
                {animeAppearances.map(({ anime, role }) => (
                  <div key={anime.mal_id} className="text-left">
                    <Image
                      src={anime.images.jpg.large_image_url || "/fallback.jpg"}
                      alt={anime.title}
                      width={335}
                      height={473}
                      className="w-[200px] h-[282px] rounded shadow-md"
                    />
                    <p className="text-sm font-medium mt-2 line-clamp-2">
                      {anime.title}
                    </p>
                    <p className="text-xs text-gray-300">{role}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 mt-4">No anime appearances found.</p>
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CharacterDetails;
