import { Action } from "redux";
import { State } from "./rootReducer";
import { ThunkAction } from "redux-thunk";

export type AppThunk = ThunkAction<void, State, unknown, Action<string>>;

export const ADD_GAMES = "ADD_GAMES" as const;
export const SET_ORDER_BY = "SET_ORDER_BY" as const;
export const SET_PLATFORM = "SET_PLATFORM" as const;
export const SET_SEARCH_LINE = "SET_SEARCH_LINE" as const;
export const LOAD_PLATFORMS = "LOAD_PLATFORMS" as const;
export const LOAD_GAMES = "LOAD_GAMES" as const;
