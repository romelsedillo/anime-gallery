export type Anime = {
  mal_id: number;
  title: string;
  images: {
    jpg: {
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
