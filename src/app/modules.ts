import { constant } from "./constant";
import { store, AppDispatch, RootState } from "./store";
import { useAppDispatch, useAppSelector } from "./hooks";
import { RequireAuth } from "./auth";

// state
import * as login from "../state/login";
import * as article from "../state/article";

// グローバル: State
const state = {
    login,
    article,
}

const isAuth = () => {

  return localStorage.getItem("login") == "true" ? true : false;
}

export {
    constant,
    store,
    state,
    isAuth,
    useAppDispatch,
    useAppSelector,
    RequireAuth,
}

export type appDispatch = AppDispatch;
export type rootState = RootState;