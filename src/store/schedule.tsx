import * as Modules from "../common/modules";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { schedule_datelist } from "../api/schedule";

export interface Schedule {
  views: object;
  dates: object;
  status: "idle" | "loading" | "failed";
}

const initialState: Schedule = {
  views: {},
  dates: {},
  status: "idle",
};

export const testList = createAsyncThunk(
  "schedule",
  async (datas: any) => {
    const response = await schedule_datelist(datas);
    return response.data;
  }
);

export const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    init: (state) => {
    }
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

export const { init } = scheduleSlice.actions;
export const views = (state: Modules.rootState) => state.schedule.views;
export const dates = (state: Modules.rootState) => state.schedule.dates;
export default scheduleSlice.reducer;