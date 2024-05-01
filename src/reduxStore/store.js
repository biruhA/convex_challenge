import { configureStore } from "@reduxjs/toolkit";
import { betReducer } from "./slice";

export const store = configureStore({
  reducer: {
    bet: betReducer,
  },
});
