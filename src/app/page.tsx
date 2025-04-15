import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import TopAnime from "@/components/layout/TopAnime";
import AnimeRecommendation from "@/components/layout/AnimeRecommendation";
import UpComingSeason from "@/components/layout/UpComingSeason";


export default function Home() {
  return (
    <div className="max-w-7xl flex flex-col mx-auto pt-0 bg-[#121212]">
      <Navbar />
      <Hero />
      <TopAnime />
      <AnimeRecommendation/>
      <UpComingSeason />
    </div>
  );
}
