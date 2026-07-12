import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import UserReducer from "./UserSlice"


const storage = {
  getItem: (key: string) => Promise.resolve(localStorage.getItem(key)),
  setItem: (key:string, value:string) => Promise.resolve(localStorage.setItem(key, value)),
  removeItem: (key:string) => Promise.resolve(localStorage.removeItem(key)),
}

const persistConfig = {
    key: "root",
    storage
}

const persitUser = persistReducer(persistConfig, UserReducer)

export const store = configureStore({
    reducer: {
        user: persitUser
    }, middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export const persitor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
