export interface IGameDescription {
    background_image: string;
    name: string;
    screenshots: string[];
    released: string;
    slug: string;
    rating: number;
    description: string;
    clip: {
        clip: string;
        preview: string;

    },
    parent_platforms: { id: number; name: string; slug: string }[]
};