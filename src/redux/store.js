import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { propertyApi } from "./api/propertyApi";
import PropertySlice from "./services/propertySlice";
import { authApi } from './api/authApi';
import { userInfosApi } from "./api/userInfosApi";
import authSlice from './services/authSlice';


export const store = configureStore({
  reducer: {
    [userInfosApi.reducerPath]: userInfosApi.reducer,
    [propertyApi.reducerPath]: propertyApi.reducer,
    [authApi.reducerPath] : authApi.reducer,
    authSlice: authSlice,
    PropertySlice:PropertySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(propertyApi.middleware,userInfosApi.middleware,authApi.middleware),
});

setupListeners(store.dispatch);
