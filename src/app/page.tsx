import AnimeCarousel from "@/components/layout/AnimeCarousel";
import DiscoverAnime from "@/components/layout/discoverAnime";
import Hero from "@/components/layout/hero";
import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <div className="max-w-7xl flex flex-col mx-auto">
      <Navbar />
      <Hero />
      <DiscoverAnime />
      <AnimeCarousel />
    </div>
  );
}
