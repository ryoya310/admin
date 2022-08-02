import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import memberReducer from "../store/member";
import articleReducer from "../store/article";

export const store = configureStore({
  reducer: {
    member: memberReducer,
    article: articleReducer,
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