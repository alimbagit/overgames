export interface IGameDescription {
  name: string;
  screenshots?: {
    image: string;
  }[];
  released: string;
  rating: number;
  website: string;
  description: string;
  clip: {
    clip: string;
    preview: string;
  };
  parent_platforms: {
    platform: { id: number; name: string; slug: string };
  }[];
}
