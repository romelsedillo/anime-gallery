import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { id: string };
};

interface Anime {
  mal_id: number;
  title: string;
  title_english?: string;
  synopsis?: string;
  images?: {
    jpg?: {
      large_image_url?: string;
    };
  };
  episodes?: number;
  year?: number;
  score?: number;
  status?: string;
  type?: string;
  genres?: {
    mal_id: number;
    name: string;
  }[];
  trailer?: {
    youtube_id?: string;
  };
  streaming?: {
    name: string;
    url: string;
  }[];
}

const getAnimeData = async (id: string): Promise<Anime | null> => {
  try {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`, {
      cache: "no-cache",
    });
    if (!res.ok) throw new Error("Failed to fetch");
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const AnimeDetailsPage = async ({ params }: Props) => {
  const anime = await getAnimeData(params.id);

  if (!anime) return notFound();

  const imageUrl = anime.images?.jpg?.large_image_url ?? "/fallback.jpg";

  return (
    <div className="max-w-7xl flex flex-col mx-auto">
      <div className="py-20">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-block text-[#00FF85] hover:underline mb-6 px-20"
        >
          ← Back to Home
        </Link>

        <div className="flex flex-col lg:flex-row gap-8 px-20">
          {/* Poster */}
          <Image
            src={imageUrl}
            alt={anime.title}
            width={335}
            height={473}
            className="w-[335px] h-[473px] object-cover rounded-lg"
          />

          {/* Anime Info */}
          <div className="lg:w-2/3 space-y-6">
            <div>
              <h1 className="text-[#FFFFFF] text-4xl font-bold">
                {anime.title}
              </h1>
              {anime.title_english && anime.title_english !== anime.title && (
                <h2 className="text-xl text-[#FFFFFF] mt-1">
                  {anime.title_english}
                </h2>
              )}
            </div>

            {anime.synopsis && (
              <p className="text-lg leading-relaxed text-[#FFFFFF]">
                {anime.synopsis}
              </p>
            )}

            <div className="flex flex-wrap gap-4 text-lg mt-4">
              <span className="text-[#FFFFFF]">
                Episodes:{" "}
                <span className="text-[#00FF85]">{anime.episodes ?? "?"}</span>
              </span>
              <span className="text-[#FFFFFF]">
                Year:{" "}
                <span className="text-[#00FF85]">{anime.year ?? "?"}</span>
              </span>
              <span className="text-[#FFFFFF]">
                Score:{" "}
                <span className="text-[#00FF85]">
                  {anime.score ? `${anime.score}/10` : "?"}
                </span>
              </span>
              <span className="text-[#FFFFFF]">
                Status:{" "}
                <span className="text-[#00FF85]">
                  {anime.status ?? "Unknown"}
                </span>
              </span>
              <span className="text-[#FFFFFF]">
                Type:{" "}
                <span className="text-[#00FF85]">{anime.type ?? "?"}</span>
              </span>
            </div>

            {/* Genres */}
            {anime.genres && anime.genres.length > 0 && (
              <div>
                <h3 className="text-[#FFFFFF] text-lg font-semibold mb-2">
                  Genres:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {anime.genres.map((genre) => (
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

        {/* Trailer */}
        {anime.trailer?.youtube_id && (
          <div className="mt-12 w-full max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-white">Trailer</h2>
            <div className="aspect-video w-[700px] h-[400px] mx-auto rounded-lg overflow-hidden shadow-md">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${anime.trailer.youtube_id}`}
                title={`${anime.title} Trailer`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        )}

        {/* Streaming Platforms */}
        {Array.isArray(anime.streaming) && anime.streaming.length > 0 && (
          <div className="mt-8 px-20">
            <h2 className="text-[#FFFFFF] text-xl font-semibold mb-4">
              Available On:
            </h2>
            <ul className="text-[#FFFFFF] space-y-2 list-disc list-inside">
              {anime.streaming.map((stream) => (
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

export default AnimeDetailsPage;
