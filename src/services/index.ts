import { rawDataToGameInfoMapper, rawDataToGameDescription } from "./utils";
import { IPlatform } from "models";

/**Загружает список платформ */
export const loadPlatforms = async () => {
  const response = await fetch("https://api.rawg.io/api/platforms");
  const responseResult = await response.json();
  return responseResult.results as IPlatform[];
};

export interface ILoadGames {
  orderBy: string;
  platform?: string;
  search?: string;
  page?:number;
}

/**Загружает список игр по параметрам api */
export const loadGames = async ({ orderBy, platform, search}: ILoadGames) => {
  let url = new URL("https://api.rawg.io/api/games");
  platform && platform !== "All" && url.searchParams.set("platform", platform);
  orderBy && url.searchParams.set("ordering", orderBy);
  search && url.searchParams.set("search", search);
  const response = await fetch(url.toString());
  const result = await response.json();
  const gameList = (result.results as any[]).map(rawDataToGameInfoMapper);
  return gameList;
};

/**Загружает список игр по параметрам api и номеру страницы*/
export const addGames = async ({ orderBy, platform, search, page}: ILoadGames) => {
  let url = new URL("https://api.rawg.io/api/games");
  platform && platform !== "All" && url.searchParams.set("platform", platform);
  orderBy && url.searchParams.set("ordering", orderBy);
  search && url.searchParams.set("search", search);
  page && url.searchParams.set("page", page.toString());
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
  const gameDescription = rawDataToGameDescription(result as any);
  url = new URL(url.toString() + "/screenshots"); //Скриншоты загружаются отдельным запросом
  const screenshots_response = await fetch(url.toString());
  const screenshots_json = await screenshots_response.json();
  gameDescription.screenshots = screenshots_json.results;
  return gameDescription;
};
