import { rawDataToGameInfoMapper } from './utils'
import { IPlatform } from 'models'

export const loadPlatforms = async () => {
  const response = await fetch('https://api.rawg.io/api/platforms')
  const responseResult = await response.json()
  return responseResult.results as IPlatform[];
}

interface ILoadGames {
  platform?: string;
  orderBy?: string;
  search?: string;
}

/**Загружает данные по параметрам api */
export const loadGames = async (params: ILoadGames) => {
  const queryString = new URLSearchParams(params as any)
  let url = `https://api.rawg.io/api/games?${queryString}`;
  const response = await fetch(url)
  const result = await response.json();
  const gameList = (result.results as any[]).map(rawDataToGameInfoMapper);
  return gameList;
};


