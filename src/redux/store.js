import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { contactApi } from "./contact";
import { filterReducer } from "./filterContacts/reducer";

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    myFilter: filterReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});

setupListeners(store.dispatch);
