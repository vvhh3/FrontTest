import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type UserState = { 
    name: string | null
    age: number | null
}

type User = {
    user: UserState | null
}

const initialState: User = {
    user: null
}


const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            state.user = action.payload
        },
        clearUser: (state) => {
            state.user = null
        }
    }
})


export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer
