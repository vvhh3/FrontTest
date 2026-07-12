// Импорт конфигурации Redux store
import { configureStore } from "@reduxjs/toolkit";
// Импорт для персистентного хранения состояния
import { persistStore, persistReducer } from "redux-persist";
// Импорт редьюсера пользователя
import UserReducer from "./UserSlice"

// Создание объекта хранилища для redux-persist с использованием localStorage
const storage = {
  // Получение значения из localStorage
  getItem: (key: string) => Promise.resolve(localStorage.getItem(key)),
  // Сохранение значения в localStorage
  setItem: (key:string, value:string) => Promise.resolve(localStorage.setItem(key, value)),
  // Удаление значения из localStorage
  removeItem: (key:string) => Promise.resolve(localStorage.removeItem(key)),
}

// Конфигурация персистентности: ключ "root" и кастомное хранилище
const persistConfig = {
    key: "root",
    storage
}

// Оборачиваем редьюсер пользователя в persistReducer для сохранения состояния
const persitUser = persistReducer(persistConfig, UserReducer)

// Создание Redux store с редьюсером пользователя и отключением проверки сериализуемости
export const store = configureStore({
    reducer: {
        user: persitUser
    }, middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
    }),
})

// Создание persistor для обёртки компонента PersistGate
export const persitor = persistStore(store)

// Типы для типизированных хуков Redux
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
