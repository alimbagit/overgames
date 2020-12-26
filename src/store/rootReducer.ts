import { Actions } from "./actions";
import {
  SET_INITIAL_VALUES,
  ADD_GAMES,
  SET_GAMES_LIST,
  SET_ORDER_BY,
  SET_PLATFORM,
  SET_SEARCH_LINE,
  LOAD_PLATFORMS
} from "./types";
import { IGameInfo, IPlatform, ORDER_FIELD } from 'models'

export type State = {
  gamesList: IGameInfo[];
  searchLine?: string;
  orderBy: string;
  platform?: string;
  isLoading: boolean;
  platforms: IPlatform[];
  error: boolean;
};

const initialState: State = {
  gamesList: [],
  isLoading: false,
  platforms: [],
  error: false,
  orderBy: ORDER_FIELD.ADDED
};

console.log("initialState=", initialState);

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

    /** Обработка загрузки списка платформ. */
    case LOAD_PLATFORMS:
      new_state.isLoading = action.payload.loading
      if (action.payload.data) {
        new_state.platforms = action.payload.data
      }
      if (action.payload.error) {
        new_state.error = action.payload.error
      }
      return new_state;

    default:
      return new_state;
  }
};
