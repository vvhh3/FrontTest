import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { UserApi, type User } from "./UserApi";

// Тип состояния Slice
type UserSliceState = {
    users: User[];
    loading: boolean;
    error: string | null;
};

// Начальное состояние
const initialState: UserSliceState = {
    users: [],
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: "users",

    initialState,

    reducers: {

        // Полностью заменить список пользователей
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload;
        },

        // Очистить список
        clearUsers: (state) => {
            state.users = []
        },

        // Добавить одного пользователя
        addUser: (state, action: PayloadAction<User>) => {
            state.users.push(action.payload);
        },

        // Удалить пользователя по id
        removeUser: (state, action: PayloadAction<number>) => {
            state.users = state.users.filter(
                user => user.id !== action.payload
            );
        },
    },

    extraReducers: (builder) => {

        builder

            // Запрос начался
            .addCase(UserApi.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            // Получили пользователей
            .addCase(UserApi.fulfilled, (state, action) => {
                state.loading = false;

                // action.payload имеет тип User[]
                state.users = action.payload;
            })

            // Ошибка
            .addCase(UserApi.rejected, (state, action) => {
                state.loading = false;

                state.error =
                    action.error.message ?? "Ошибка";
            });

    },
});

export const {
    setUsers,
    clearUsers,
    addUser,
    removeUser,
} = userSlice.actions;

export default userSlice.reducer;