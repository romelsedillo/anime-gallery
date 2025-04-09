import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

interface PageProps {
  params: {
    id: string;
  };
}

const getAnimeData = async (id: string) => {
  try {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`, {
      cache: "no-cache",
    });
    if (!res.ok) throw new Error("Failed to fetch");
    const data = await res.json();
    console.log(data);
    return data.data;
  } catch (error) {
    return null;
  }
};
const getAnimeEpisodes = async (id: string) => {
  try {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/episodes`, {
      cache: "no-cache",
    });
    if (!res.ok) throw new Error("Failed to fetch episodes");
    const data = await res.json();
    return data.data;
  } catch (error) {
    return [];
  }
};

export default async function AnimeDetailsPage({ params }: PageProps) {
  const anime = await getAnimeData(params.id);
  const episodes = await getAnimeEpisodes(params.id);

  if (!anime) return notFound();

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-28">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Anime Poster */}
          <Image
            src={anime.images?.jpg?.large_image_url || "/fallback.jpg"}
            alt={anime.title}
            width={335}
            height={473}
            className="w-[335px] h-[473px] object-cover rounded-xl shadow-lg shadow-purple-400"
          />

          {/* Anime Details */}
          <div className="lg:w-2/3 space-y-6">
            <div>
              <h1 className="text-4xl font-bold">{anime.title}</h1>
              {anime.title_english && (
                <h2 className="text-xl text-purple-400 mt-1">
                  {anime.title_english}
                </h2>
              )}
            </div>

            <p className="text-lg leading-relaxed">{anime.synopsis}</p>

            <div className="flex flex-wrap gap-4 text-lg mt-4">
              <span>
                Episodes:{" "}
                <span className="text-purple-400">{anime.episodes ?? "?"}</span>
              </span>
              <span>
                Year:{" "}
                <span className="text-purple-400">{anime.year ?? "?"}</span>
              </span>
              <span>
                Score:{" "}
                <span className="text-purple-400">{anime.score ?? "?"}/10</span>
              </span>
              <span>
                Status: <span className="text-purple-400">{anime.status}</span>
              </span>
              <span>
                Type: <span className="text-purple-400">{anime.type}</span>
              </span>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Genres:</h3>
              <div className="flex flex-wrap gap-2">
                {anime.genres.map((genre: any) => (
                  <span
                    key={genre.mal_id}
                    className="px-3 py-1 bg-purple-700 text-white rounded-full text-sm hover:bg-purple-800 transition"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* YouTube Trailer */}
        {anime.trailer && anime.trailer.youtube_id && (
          <div className="mt-12 px-52 flex flex-col">
            <h2 className="text-2xl font-semibold mb-4">Trailer</h2>
            <div className="mx-auto w-[700px] h-[400px] rounded-lg overflow-hidden shadow-md">
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
        {anime.streaming?.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Available On:</h2>
            <ul className="space-y-2 list-disc list-inside">
              {anime.streaming.map((stream: any) => (
                <li key={stream.name}>
                  <a
                    href={stream.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 underline"
                  >
                    {stream.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
