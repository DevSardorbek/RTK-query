import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import heartSlice from "./slice/heartSlice";
export const store = configureStore({
  reducer: {
    heart: heartSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
