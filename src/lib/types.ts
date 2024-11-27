export type AnimeProps = {
  mal_id: number;
  title: string;
  title_japanese: string;
  synopsis: string;
  score: number;
  scored_by: number;
  favorites: number;
  genres: { name: string }[];
  images: {
    webp: {
      large_image_url: string;
      maximum_image_url: string;
    };
  };
  trailer: {
    images: {
      large_image_url: string;
      maximum_image_url: string;
    };
  };
};
