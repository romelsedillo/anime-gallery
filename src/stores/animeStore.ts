import axios from "axios";
import { create } from "zustand";

type Anime = {
  mal_id: number;
  title: string;
  name: string;
  images: {
    jpg: {
      image_url: string;
      large_image_url: string;
    };
  };
  aired?: {
    prop?: {
      from?: {
        day?: number;
        month?: number;
        year?: number;
      };
    };
  };
};

type AnimeStore = {
  topAnime: Anime[];
  upcomingAnime: Anime[];
  recommendationAnime: Anime[];
  animeCharacters: Anime[];
  loading: boolean;
  fetchAnimeCharacters: () => Promise<void>;
  fetchTopAnime: () => Promise<void>;
  fetchUpcomingAnime: () => Promise<void>;
  fetchRecommendationAnime: () => Promise<void>;
};

export const useAnimeStore = create<AnimeStore>((set, get) => ({
  topAnime: [],
  upcomingAnime: [],
  recommendationAnime: [],
  animeCharacters: [],
  loading: false,

  fetchTopAnime: async () => {
    if (get().topAnime.length > 0) return;

    set({ loading: true });
    try {
      const res = await axios.get("https://api.jikan.moe/v4/top/anime");
      set({ topAnime: res.data.data });
    } catch (err) {
      console.error("Failed to fetch top anime.", err);
    } finally {
      set({ loading: false });
    }
  },

  fetchUpcomingAnime: async () => {
    if (get().upcomingAnime.length > 0) return;

    set({ loading: true });
    try {
      const res = await axios.get("https://api.jikan.moe/v4/seasons/upcoming");
      set({ upcomingAnime: res.data.data });
    } catch (err) {
      console.error("Failed to fetch upcoming anime.", err);
    } finally {
      set({ loading: false });
    }
  },

  fetchRecommendationAnime: async () => {
    if (get().recommendationAnime.length > 0) return;
    set({ loading: true });
    try {
      const res = await axios.get(
        "https://api.jikan.moe/v4/recommendations/anime"
      );
      set({ recommendationAnime: res.data.data });
    } catch (err) {
      console.error("Failed to fetch recommendations anime.", err);
    } finally {
      set({ loading: false });
    }
  },

  fetchAnimeCharacters: async () => {
    if (get().animeCharacters.length > 0) return;

    set({ loading: true });
    try {
      const res = await axios.get("https://api.jikan.moe/v4/top/characters");
      set({ animeCharacters: res.data.data });
    } catch (err) {
      console.error("Failed to fetch anime characters.", err);
    } finally {
      set({ loading: false });
    }
  },
}));
