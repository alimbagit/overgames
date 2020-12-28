import { Actions } from "./actions";
import {
  ADD_GAMES,
  SET_ORDER_BY,
  SET_PLATFORM,
  SET_SEARCH_LINE,
  LOAD_PLATFORMS,
  LOAD_GAMES
} from "./types";
import { IGameInfo, IPlatform, ORDER_FIELD } from 'models'

export type State = {
  gamesList: IGameInfo[];
  searchLine?: string;
  orderBy: string;
  platform?: string;
  isLoadingPlatforms: boolean;
  isLoadingGames: boolean;
  platforms: IPlatform[];
  error: boolean;
};

const initialState: State = {
  gamesList: [],
  isLoadingPlatforms: false,
  isLoadingGames:false,
  platforms: [],
  error: false,
  orderBy: ORDER_FIELD.RELEVANCE,
  platform: "All",
  searchLine: ""
};

console.log("initialState=", initialState);

export const rootReducer = (
  state: State = initialState,
  action: Actions
): State => {
  const new_state = JSON.parse(JSON.stringify(state)) as State;
  switch (action.type) {

    /**Добавление игр в список */
    case ADD_GAMES:
      new_state.gamesList = new_state.gamesList.concat(
        action.payload.gamesList
      );
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
      new_state.isLoadingPlatforms = action.payload.loadingPlatforms
      if (action.payload.data) {
        new_state.platforms = action.payload.data
      }
      if (action.payload.error) {
        new_state.error = action.payload.error
      }
      return new_state;

    /** Обработка загрузки списка игр. */
    case LOAD_GAMES:
      new_state.isLoadingGames=action.payload.loadingGames;
      if(action.payload.data){
        new_state.gamesList=action.payload.data;
      }
      if(action.payload.error){
        new_state.error=action.payload.error;
      }
      return new_state;

    default:
      return new_state;
  }
};
