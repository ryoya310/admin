import * as Modules from "../app/modules";
import { createSlice } from "@reduxjs/toolkit";

export interface LoginState {
  form: any;
  isAuth: boolean;
  status: "idle" | "loading" | "failed";
}

const initialState: LoginState = {
  form: {},
  isAuth: false,
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
      localStorage.setItem("login", arr.payload.result);
      state.isAuth = arr.payload.result;
    }
  },
});

export const { getFormData, setAuth } = loginSlice.actions;
export const form = (state: Modules.rootState) => state.login.form;
export const isAuth = (state: Modules.rootState) => state.login.isAuth;
export default loginSlice.reducer;