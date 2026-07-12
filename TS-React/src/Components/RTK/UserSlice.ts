import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type UserState = { 
    name: string | null
    age: number | null
}

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
    initialState,
    // Редьюсеры (функции, изменяющие состояние)
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            state.user = action.payload
        },
        clearUser: (state) => {
            state.user = null
        }
    }
})

// Экспорт действий (action creators) и редьюсера
export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer
