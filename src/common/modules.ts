import { constant, Constants, ConstantsProvider } from "./constant";
import { store, AppDispatch, RootState } from "./store";
import { useAppDispatch, useAppSelector } from "./hooks";
import { RequireAuth } from "./auth";

// state
import * as member from "../store/member";
import * as article from "../store/article";
import * as schedule from "../store/schedule";

// グローバル: State
const state = {
  member,
  article,
  schedule,
}

// localStorageにmemberがあれば簡易認証
const isAuth = () => {
  return localStorage.getItem("member") == "true" ? true : false;
}

export {
  constant,
  Constants,
  ConstantsProvider,
  store,
  state,
  isAuth,
  useAppDispatch,
  useAppSelector,
  RequireAuth,
}

export type appDispatch = AppDispatch;
export type rootState = RootState;