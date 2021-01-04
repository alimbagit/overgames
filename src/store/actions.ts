import {
  ADD_GAMES,
  SET_ORDER_BY,
  SET_PLATFORM,
  SET_SEARCH_LINE,
  LOAD_PLATFORMS,
  LOAD_GAMES,
  AppThunk,
} from "./types";
import * as services from "services";
import { IGameInfo, IPlatform } from "models";

interface ILoadPlatformsAction {
  type: typeof LOAD_PLATFORMS;
  payload: {
    loadingPlatforms: boolean;
    data: IPlatform[];
    error: boolean;
  };
}

/**Загрузка платформ */
export const loadPlatforms = (): AppThunk => (dispatch) => {
  dispatch({
    type: LOAD_PLATFORMS,
    payload: {
      loadingPlatforms: true,
    },
  });

  services
    .loadPlatforms()
    .then((platforms) => {
      dispatch({
        type: LOAD_PLATFORMS,
        payload: {
          loading: false,
          data: platforms,
        },
      });
    })
    .catch(() => {
      dispatch({
        type: LOAD_PLATFORMS,
        payload: {
          loading: false,
          error: true,
        },
      });
    });
};

interface ILoadGamesAction {
  type: typeof LOAD_GAMES;
  payload: {
    loadingGames: boolean;
    data: IGameInfo[];
    error: boolean;
  };
}

/**Загрузка игр по новому фильтру */
export function loadGames(params: services.ILoadGames): AppThunk {
  return (dispatch) => {
    dispatch({
      type: LOAD_GAMES,
      payload: {
        loadingGames: true,
      },
    });

    services
      .loadGames(params)
      .then((games) => {
        dispatch({
          type: LOAD_GAMES,
          payload: {
            loadingGames: false,
            data: games,
          },
        });
      })
      .catch(() => {
        dispatch({
          type: LOAD_GAMES,
          payload: {
            loadingGames: false,
            error: true,
          },
        });
      });
  };
}

interface IAddGamesAction {
  type: typeof ADD_GAMES;
  payload: {
    loadingGames: boolean;
    data: IGameInfo[];
    error: boolean;
  };
}
/**Добавление игр следующей страницы*/
export function addGames(params: services.ILoadGames): AppThunk {
  return (dispatch) => {
    dispatch({
      type: ADD_GAMES,
      payload: {
        addGames: true,
      },
    });

    services
      .addGames(params)
      .then((games) => {
        dispatch({
          type: ADD_GAMES,
          payload: {
            addGames: false,
            data: games,
          },
        });
      })
      .catch(() => {
        dispatch({
          type: ADD_GAMES,
          payload: {
            addGames: false,
            error: true,
          },
        });
      });
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
  | ReturnType<typeof setOrderBy>
  | ReturnType<typeof setSearchLine>
  | ReturnType<typeof setPlatform>
  | ILoadPlatformsAction
  | IAddGamesAction
  | ILoadGamesAction;
