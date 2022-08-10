import * as Modules from "../common/modules";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const name = "article";

export interface ArticleState {
  views: any;
  status: "idle" | "loading" | "failed";
}

const initialState: ArticleState = {
  views: {},
  status: "idle",
};

export const getList = createAsyncThunk(
  name,
  async (query: any) => {
    const response = await axios.get(`${Modules.constant.apiRoot}app/article.php${query}`);
    return response.data;
  }
);

export const articleSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    setFormData: (state, arr) => {
      state.views = arr.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getList.fulfilled, (state, action) => {
        state.status = "idle";
        state.views = action.payload;
      })
      .addCase(getList.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setFormData } = articleSlice.actions;
export const select = (state: Modules.rootState) => state.article;
export default articleSlice.reducer;