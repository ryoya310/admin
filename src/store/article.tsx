import * as Modules from "../common/modules";
import { createSlice } from "@reduxjs/toolkit";

export interface ArticleState {
  form: any;
  list: any;
  status: "idle" | "loading" | "failed";
}

const initialState: ArticleState = {
  form: {},
  list: "",
  status: "idle",
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    getFormData: (state, arr) => {
      state.form[arr.payload.name] = arr.payload.value;
    },
    getListData: (state, arr) => {
      state.list = arr;
    }
  },
});

export const { getFormData, getListData } = articleSlice.actions;
export const form = (state: Modules.rootState) => state.article.form;
export const list = (state: Modules.rootState) => state.article.list;
export default articleSlice.reducer;