import { GameParameters } from "./myRedux/rootReducer";

// export const platformsId: { [key: string]: string } = {
//   PC: "4",
//   "PlayStation 4": "18",
//   "PlayStation 5": "187",
//   "Xbox One": "1",
//   "Nintendo Switch": "7",
//   Android: "21",
//   All: "4,18,187,1,7,21",
// };
export const platformsId = new Map<string, string>([
  ["PC", "4"],
  ["PlayStation 4", "18"],
  ["PlayStation 5", "187"],
  ["Xbox One", "1"],
  ["Nintendo Switch", "7"],
  ["Android", "21"],
  ["All", "4,18,187,1,7,21"],
]);

export const orderingId = new Map<string, string>([
  ["Name", "name"],
  ["Release data", "released"],
  ["Popularity", "added"],
  ["Average rating", "rating"]
]);


/**Загружает данные по параметрам api */
export const getGames = async (
  platform: string,
  orderBy: string,
  search?: string
) => {
  let url =
    "https://api.rawg.io/api/games?platforms=" +
    platformsId.get(platform) +
    "&ordering=" +
    orderBy;
  if (orderBy) url += "&search=" + search;
  const result = await (await fetch(url)).json();
  console.log(result);
  const gameList = await GameParametersFromJson(result.results);
  return gameList;
};

/**Преобразует json формат в тип данных GameParameters */
const GameParametersFromJson = (jsonList: Array<any>) => {
  let gameList: GameParameters[] = [];
  jsonList.forEach((element) => {
    gameList.push({
      name: element["name"],
      backgroundImage: element["background_image"],
      released: element["released"],
      rating: element["rating"],
      screensohts: element["short_screenshots"],
      slug: element["slug"],
    });
  });

  return gameList;
};
