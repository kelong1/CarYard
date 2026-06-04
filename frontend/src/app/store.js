import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/authSlice";
import fetchCarsApi from "../features/Products/ProductApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    authReducer: authReducer,
    [fetchCarsApi.reducerPath]: fetchCarsApi.reducer,
  },
  middleware: (getDefaultMiddlewares) => {
    return getDefaultMiddlewares().concat(fetchCarsApi.middleware);
  },
});

setupListeners(store.dispatch);
