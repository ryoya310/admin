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

const serializeForm = (target: string) => {

  const form = document.querySelector(target) as HTMLFormElement;
  if (form === null) return "";

  const fd = new FormData(form);
  let query = "?";
  for (const arr of fd.entries()) {
    query += `${arr[0]}=${arr[1]}&`;
  }
  return query.slice(0, -1);
}

const serializeArray = (datas: any) => {

  let query = "?";
  Object.keys(datas).forEach(function (key) {
    query += `${key}=${datas[key]}&`;
  });

  return query.slice(0, -1);
}

export {
  constant,
  Constants,
  ConstantsProvider,
  store,
  state,
  isAuth,
  serializeForm,
  serializeArray,
  useAppDispatch,
  useAppSelector,
  RequireAuth,
}

export type appDispatch = AppDispatch;
export type rootState = RootState;