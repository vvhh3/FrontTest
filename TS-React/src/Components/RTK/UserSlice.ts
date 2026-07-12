// Импорт createSlice и типа PayloadAction из Redux Toolkit
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// Тип состояния пользователя: имя и возраст
type UserState = { 
    name: string | null
    age: number | null
}

// Тип всего слайса: объект с полем user
type User = {
    user: UserState | null
}

// Начальное состояние: пользователь отсутствует
const initialState: User = {
    user: null
}

// Создание слайса для управления состоянием пользователя
const userSlice = createSlice({
    // Имя слайса (используется в action types)
    name: "users",
    // Начальное состояние
    initialState,
    // Редьюсеры (функции, изменяющие состояние)
    reducers: {
        // Установка данных пользователя
        setUser: (state, action: PayloadAction<UserState>) => {
            state.user = action.payload
        },
        // Очистка данных пользователя
        clearUser: (state) => {
            state.user = null
        }
    }
})

// Экспорт действий (action creators) и редьюсера
export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer
