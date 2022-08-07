import * as Modules from "../common/modules";
import { createAsyncThunk, createSlice, configureStore } from "@reduxjs/toolkit";
import { schedule_datelist } from "../api/schedule";

export interface Schedule {
  views: any;
  dates: any;
  status: "idle" | "loading" | "failed";
}

const initialState: Schedule = {
  views: {},
  dates: {},
  status: "idle",
};

export const testList = createAsyncThunk(
  "schedule",
  async (datas: string | null) => {
    const response = await schedule_datelist(datas);
    return response.data;
  }
);

export const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(testList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(testList.fulfilled, (state, action) => {
        state.status = "idle";
        state.views = action.payload;
      })
      .addCase(testList.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const views = (state: Modules.rootState) => state.schedule.views;
export default scheduleSlice.reducer;