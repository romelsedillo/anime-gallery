import AnimeRecommendation from "@/components/layout/AnimeRecommendation";
import TopAnime from "@/components/layout/TopAnime";

export default function Home() {
  return (
    <div className="max-w-7xl flex flex-col mx-auto pt-0 bg-[#121212]">
      <TopAnime />
      <AnimeRecommendation />
    </div>
  );
}
