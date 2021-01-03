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
    clip,
    description_raw:description,
    name,
    parent_platforms,
    rating,
    released,
    website
}: any): IGameDescription => ({
    clip,
    description,
    name,
    parent_platforms,
    rating,
    released,
    website
});