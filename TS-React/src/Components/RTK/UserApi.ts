import { createAsyncThunk } from "@reduxjs/toolkit";

// Тип одного пользователя
export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
};

// User[] - API вернёт массив пользователей
// void - thunk ничего не принимает
export const UserApi = createAsyncThunk<User[], void>(
    "users/getUsers",

    async () => {

        const res = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!res.ok) {
            throw new Error("Ошибка загрузки пользователей");
        }

        return await res.json();
    }
);