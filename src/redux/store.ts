import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import auth from "./auth/auth";
import message from "./auth/message";

import { usersApi } from "./services/users.api";

const rootReducer = combineReducers({
  //Combine all reducers
  auth,
  message,
  [usersApi.reducerPath]: usersApi.reducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
