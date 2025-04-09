import AnimeRecommendation from "@/components/layout/animeRecomendation";
import Footer from "@/components/layout/footer";
import Hero from "@/components/layout/hero";
import Navbar from "@/components/layout/navbar";
import TopAnime from "@/components/layout/topAnime";

export default function Home() {
  return (
    <div className="max-w-7xl flex flex-col mx-auto">
      <Navbar />
      <Hero />
      <TopAnime />
      <AnimeRecommendation />
      <Footer />
    </div>
  );
}
