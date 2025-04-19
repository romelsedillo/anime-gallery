import AnimeRecommendation from "@/components/layout/AnimeRecommendation";
import Navbar from "@/components/layout/CharacterNavbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import TopAnime from "@/components/layout/TopAnime";
import UpComingSeason from "@/components/layout/UpComingSeason";

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
