import * as Modules from "../common/modules";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../api/login";

export interface LoginState {
  views: any;
  isAuth: boolean;
  status: "idle" | "loading" | "failed";
}

const initialState: LoginState = {
  views: {},
  isAuth: false,
  status: "idle",
};

export const getLoginInfo = createAsyncThunk(
  "login",
  async (datas: any) => {
    const response = await login(datas);
    return response.data;
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    getFormData: (state, arr) => {
      state.views = arr.payload;
    },
    setAuth: (state, arr) => {
      localStorage.setItem("login", arr.payload.result);
      state.isAuth = arr.payload.result;
    },
    getViews: (state) => {
      console.log(state)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLoginInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getLoginInfo.fulfilled, (state, action) => {
        state.status = "idle";
        state.views = action.payload;
      })
      .addCase(getLoginInfo.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { getFormData, setAuth, getViews } = loginSlice.actions;
export const views = (state: Modules.rootState) => state.login.views;
export const isAuth = (state: Modules.rootState) => state.login.isAuth;
export default loginSlice.reducer;