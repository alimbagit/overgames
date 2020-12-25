import { State, GameParameters } from "./rootReducer";
import {
  SET_INITIAL_VALUES,
  ADD_GAMES,
  SET_GAMES_LIST,
  SET_ORDER_BY,
  SET_PLATFORM,
  SET_SEARCH_LINE,
} from "./types";

/**Устанавливает начальные значения */
export function setInitialValues(initialState: State) {
  return {
    type: SET_INITIAL_VALUES,
    payload: { initialState },
  };
}

/**Добавление игр следующей страницей
 * @param gamesList - список игр
 */
export function addGames(gamesList: GameParameters[]) {
  return {
    type: ADD_GAMES,
    payload: { gamesList },
  };
}

/**Загрузка игр по новому фильтру
 * @param gamesList - список игр
 */
export function setGamesList(gamesList: GameParameters[]) {
  return {
    type: SET_GAMES_LIST,
    payload: { gamesList },
  };
}

/**Изменение параметра сортировки */
export function setOrderBy(orderBy: string) {
  return {
    type: SET_ORDER_BY,
    payload: { orderBy },
  };
}

/**Изменение параметра платформы */
export function setPlatform(platform: string) {
  return {
    type: SET_PLATFORM,
    payload: { platform },
  };
}

/**Изменение параметра поисковой строки */
export function setSearchLine(searchLine: string) {
  return {
    type: SET_SEARCH_LINE,
    payload: { searchLine },
  };
}

export type Actions =
  | ReturnType<typeof setInitialValues>
  | ReturnType<typeof addGames>
  | ReturnType<typeof setGamesList>
  | ReturnType<typeof setOrderBy>
  | ReturnType<typeof setSearchLine>
  | ReturnType<typeof setPlatform>;
