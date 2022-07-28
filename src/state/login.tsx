import * as Modules from "../app/modules";
import { createSlice } from "@reduxjs/toolkit";

export interface LoginState {
  form: any;
  isLogin: boolean;
  status: "idle" | "loading" | "failed";
}

const initialState: LoginState = {
  form: {},
  isLogin: false,
  status: "idle",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    getFormData: (state, arr) => {
      state.form[arr.payload.name] = arr.payload.value;
    },
    setAuth: (state, arr) => {
      state.isLogin = (localStorage.getItem("login") == "true") ? true : arr.payload.result;
      localStorage.setItem("login", arr.payload.result);
    }
  },
});

export const { getFormData, setAuth } = loginSlice.actions;
export const form = (state: Modules.rootState) => state.login.form;
export const isLogin = (state: Modules.rootState) => state.login.isLogin;
export default loginSlice.reducer;