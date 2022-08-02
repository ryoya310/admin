import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import memberReducer from "../store/member";
import articleReducer from "../store/article";
import scheduleReducer from "../store/schedule";

export const store = configureStore({
  reducer: {
    member: memberReducer,
    article: articleReducer,
    schedule: scheduleReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;