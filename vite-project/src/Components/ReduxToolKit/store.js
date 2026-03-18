import { configureStore } from "@reduxjs/toolkit";
import bearReducer from "./bearSlice";
import fishReducer from "./fishSlice"
import { persistStore, persistReducer } from "redux-persist";

const storage = {
  getItem: (key) => Promise.resolve(localStorage.getItem(key)),
  setItem: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
  removeItem: (key) => Promise.resolve(localStorage.removeItem(key)),
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedBearReducer = persistReducer(persistConfig, bearReducer);
const persistedFishReducer = persistReducer(persistConfig, fishReducer);

export const store = configureStore({
  reducer: {
    bear: persistedBearReducer,
    fish: persistedFishReducer,
  },
});

export const persistor = persistStore(store);