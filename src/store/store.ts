import { combineReducers, configureStore, Middleware } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux";
import { materialsReducers } from "./features/materialsSlice";
import { userReducers } from "./features/userSlice";
import { telegramStorageReducer } from "./features/telegramStorageSlice";


const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState().telegramStorage;
  
  if (typeof window !== 'undefined') {
    if (window.Telegram?.WebApp?.CloudStorage?.setItem) {
      // Для Telegram WebApp Cloud Storage
      Object.entries(state.data).forEach(([key, value]) => {
        window.Telegram.WebApp.CloudStorage?.setItem(key, JSON.stringify(value));
      });
    } else {
      // Для обычного localStorage
      localStorage.setItem('tg_storage', JSON.stringify(state.data));
    }
  }
  return result;
};

export const makeStore = () => {
  return configureStore({
    reducer: combineReducers({
      materials: materialsReducers,
      user: userReducers,
      telegramStorage: telegramStorageReducer,
    }),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(localStorageMiddleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;
