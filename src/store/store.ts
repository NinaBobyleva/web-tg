import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux";
import { materialsReducers } from "./features/materialsSlice";
import { userReducers } from "./features/userSlice";
import { telegramStorageReducer } from "./features/telegramStorageSlice";

export const makeStore = () => {
  return configureStore({
    reducer: combineReducers({
      materials: materialsReducers,
      user: userReducers,
      telegramStorage: telegramStorageReducer,
    }),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;
