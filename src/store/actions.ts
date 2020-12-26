import { State } from "./rootReducer";
import {
  SET_INITIAL_VALUES,
  ADD_GAMES,
  SET_GAMES_LIST,
  SET_ORDER_BY,
  SET_PLATFORM,
  SET_SEARCH_LINE,
  LOAD_PLATFORMS,
} from "./types";
import * as services from 'services'
import { IGameInfo, IPlatform } from 'models'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'

/**Устанавливает начальные значения */
export function setInitialValues(initialState: State) {
  return {
    type: SET_INITIAL_VALUES,
    payload: { initialState },
  };
}

interface ILoadPlatformsAction {
  type: typeof LOAD_PLATFORMS,
  payload: {
    loading: boolean;
    data: IPlatform[];
    error: boolean;
  }
}


export function loadPlatforms(dispatch: any) {

  dispatch({
    type: LOAD_PLATFORMS,
    payload: {
      loading: true
    }
  })

  services.loadPlatforms().then(platforms => {

    dispatch({
      type: LOAD_PLATFORMS,
      payload: {
        loading: false,
        data: platforms,
      }
    })
  }).catch(() => {
    dispatch({
      type: LOAD_PLATFORMS,
      payload: {
        loading: false,
        error: true,
      }
    })
  })
}

/**Добавление игр следующей страницей
 * @param gamesList - список игр
 */
export function addGames(gamesList: IGameInfo[]) {
  return {
    type: ADD_GAMES,
    payload: { gamesList },
  };
}

/**Загрузка игр по новому фильтру
 * @param gamesList - список игр
 */
export function setGamesList(gamesList: IGameInfo[]) {
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
  | ReturnType<typeof setPlatform>
  | ILoadPlatformsAction;
