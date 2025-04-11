import AnimeRecommendation from "@/components/layout/animeRecomendation";
import Footer from "@/components/layout/footer";
import Hero from "@/components/layout/hero";
import Navbar from "@/components/layout/navbar";
import TopAnime from "@/components/layout/topAnime";
import UpComingSeason from "@/components/layout/upComingSeason";

export default function Home() {
  return (
    <div className="max-w-7xl flex flex-col mx-auto pt-0 bg-[#121212]">
      <Navbar />
      <Hero />
      <TopAnime />
      <AnimeRecommendation />
      <UpComingSeason />
      <Footer />
    </div>
  );
}
