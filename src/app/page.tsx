import AnimeRecommendation from "@/components/layout/AnimeRecommendation";
import UpComingSeason from "@/components/layout/UpComingSeason";

export default function Home() {
  return (
    <div className="max-w-7xl flex flex-col mx-auto pt-0 bg-[#121212]">
      <AnimeRecommendation />
      <UpComingSeason />
    </div>
  );
}
