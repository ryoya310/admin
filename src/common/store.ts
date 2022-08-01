import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import loginReducer from "../store/login";
import articleReducer from "../store/article";

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