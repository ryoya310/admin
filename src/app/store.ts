import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import loginReducer from "../state/login";
import articleReducer from "../state/article";

export const store = configureStore({
  reducer: {
    login: loginReducer,
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