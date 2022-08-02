import * as Modules from "../common/modules";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../api/member";

export interface Member {
  views: any;
  isAuth: boolean;
  status: "idle" | "loading" | "failed";
}

const initialState: Member = {
  views: {},
  isAuth: false,
  status: "idle",
};

export const getLoginInfo = createAsyncThunk(
  "member",
  async (datas: any) => {
    const response = await login(datas);
    return response.data;
  }
);

export const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    getFormData: (state, arr) => {
      state.views = arr.payload;
    },
    setAuth: (state, arr) => {
      localStorage.setItem("member", arr.payload.result);
      state.isAuth = arr.payload.result;
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

export const { getFormData, setAuth } = memberSlice.actions;
export const views = (state: Modules.rootState) => state.member.views;
export const isAuth = (state: Modules.rootState) => state.member.isAuth;
export default memberSlice.reducer;