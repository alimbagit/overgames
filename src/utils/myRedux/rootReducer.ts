import { Actions } from "./actions";
import {
  SET_INITIAL_VALUES,
  ADD_GAMES,
  SET_GAMES_LIST,
  SET_ORDER_BY,
  SET_PLATFORM,
  SET_SEARCH_LINE,
} from "./types";
import { orderingId, platformsId } from "utils/serverApi";

export type GameParameters = {
  backgroundImage: string;
  name: string;
  screensohts: string[];
  released: string;
  slug: string;
  rating: number;
};
export type State = {
  gamesList: GameParameters[];
  searchLine: string;
  orderBy: string;
  platform: string;
};

const initialState: State = {
  gamesList: [],
  orderBy: Array.from(orderingId.keys())[0],
  platform: Array.from(platformsId.keys())[0],
  searchLine: "",
};

export const rootReducer = (
  state: State = initialState,
  action: Actions
): State => {
  const new_state = JSON.parse(JSON.stringify(state)) as State;
  // console.log("rootReducer");
  switch (action.type) {
    /**Начальная инициализация состояния */
    case SET_INITIAL_VALUES:
      new_state.gamesList = action.payload.initialState.gamesList;
      return new_state;
    /**Добавление игр в список */
    case ADD_GAMES:
      new_state.gamesList = new_state.gamesList.concat(
        action.payload.gamesList
      );
      return new_state;

    /**Загрузка игр по новому фильтру*/
    case SET_GAMES_LIST:
      new_state.gamesList = action.payload.gamesList;
      return new_state;

    /**Установка параметра соритровки*/
    case SET_ORDER_BY:
      new_state.orderBy = action.payload.orderBy;
      return new_state;

    /**Установка плтаформы для фильтра*/
    case SET_PLATFORM:
      new_state.platform = action.payload.platform;
      return new_state;

    /**Установка поисковой строки*/
    case SET_SEARCH_LINE:
      new_state.searchLine = action.payload.searchLine;
      return new_state;
    default:
      return new_state;
  }
};
