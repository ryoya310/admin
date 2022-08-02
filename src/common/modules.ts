import { constant } from "./constant";
import { store, AppDispatch, RootState } from "./store";
import { useAppDispatch, useAppSelector } from "./hooks";
import { RequireAuth } from "./auth";

// state
import * as member from "../store/member";
import * as article from "../store/article";

// グローバル: State
const state = {
    member,
    article,
}

// localStorageにloginがあれば簡易認証
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