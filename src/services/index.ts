import { rawDataToGameInfoMapper } from './utils'
import { IPlatform } from 'models'
import { IGameDescription } from 'models/game-description'

/**Загружает список платформ */
export const loadPlatforms = async () => {
  const response = await fetch('https://api.rawg.io/api/platforms')
  const responseResult = await response.json()
  return responseResult.results as IPlatform[];
}

export interface ILoadGames {
  orderBy: string;
  platform?: string;
  search?: string;
}

/**Загружает данные по параметрам api */
export const loadGames = async ({ orderBy, platform, search }: ILoadGames) => {
  let url = new URL("https://api.rawg.io/api/games");
  (platform && platform !== "All") && url.searchParams.set("platform", platform);
  orderBy && url.searchParams.set("ordering", orderBy);
  search && url.searchParams.set("search", search);
  const response = await fetch(url.toString());
  const result = await response.json();
  const gameList = (result.results as any[]).map(rawDataToGameInfoMapper);
  return gameList;
};


/**Загружает описание одной игры */
export const loadGameDescription = async (gameName: string) => {
  let url = new URL("https://api.rawg.io/api/games/" + gameName);
  const response = await fetch(url.toString());
  const result = await response.json();
  const gameDescription = (result as IGameDescription);
  return gameDescription;
};