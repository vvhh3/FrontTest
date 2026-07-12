
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import UserReducer from "./UserSlice"

// Создание объекта хранилища для redux-persist с использованием localStorage

//Зачем тут промисы?? -  Разработчики сделали единый интерфейс ,Чтобы библиотеке было всё равно, какое хранилище используется
// Она ожидает примерно такой интерфейс:
// interface Storage {
//     getItem(key): Promise<string | null>;
//     setItem(key, value): Promise<void>;
//     removeItem(key): Promise<void>;
// }

const storage = {
    getItem: (key: string) => Promise.resolve(localStorage.getItem(key)),
    setItem: (key: string, value: string) => Promise.resolve(localStorage.setItem(key, value)),
    removeItem: (key: string) => Promise.resolve(localStorage.removeItem(key)),
}

// Конфигурация персистентности: ключ "root" и кастомное хранилище
const persistConfig = {
    key: "root", // под каким именнем хранить данные
    storage,  // где хранить: localStorage, sesionStorage
    //whitelist: ["user"], whitelist -  Сохранять только определённые поля
    //blacklist: ["loading"],blacklist - не сохранять определённые поля
    //version: 1, хранит версию состояния
    //timeout: 5000, Через сколько считать восстановление неудачным
    // debug: true , // включает логи
}

// Оборачиваем редьюсер пользователя в persistReducer для сохранения состояния
const persitUser = persistReducer(persistConfig, UserReducer)
// persitReducer - прослойка между redux и localstorage , нужен для того что бы хранить состояния в localstorage

export const store = configureStore({
    reducer: {
        user: persitUser
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

// Создание persistor для обёртки компонента PersistGate
export const persitor = persistStore(store) // Он запускает процесс восстановления сохранённого состояния при старте приложения

// Типы для типизированных хуков Redux
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
