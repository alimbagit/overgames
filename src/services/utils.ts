import { IGameInfo, IGameDescription } from 'models'

/**Преобразует json формат в тип данных GameInfo */
export const rawDataToGameInfoMapper = ({
    name,
    background_image: backgroundImage,
    released,
    rating,
    short_screenshots: screenshots,
    slug
}: any): IGameInfo => ({
    name,
    backgroundImage,
    released,
    rating,
    screenshots,
    slug
});

/**Преобразует json формат в тип данных GameDescription */
export const rawDataToGameDescription = ({
    background_image,
    clip,
    description,
    name,
    parent_platforms,
    rating,
    released,
    slug,
    website
}: any): IGameDescription => ({
    background_image,
    clip,
    description,
    name,
    parent_platforms,
    rating,
    released,
    slug,
    website
});