import { createReducer } from "@reduxjs/toolkit";
import { filter } from "./action";

export const filterReducer = createReducer("", {
  [filter]: (state, action) => action.payload,
});
