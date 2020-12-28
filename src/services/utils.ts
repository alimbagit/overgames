import { IGameInfo } from 'models'

/**Преобразует json формат в тип данных GameInfo */
export const rawDataToGameInfoMapper = ({ name, background_image: backgroundImage, released, rating, short_screenshots: screenshots, slug }: any): IGameInfo => ({ name, backgroundImage, released, rating, slug, screenshots });

