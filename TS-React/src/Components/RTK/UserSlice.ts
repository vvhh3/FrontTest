import { createSlice } from "@reduxjs/toolkit";

type UserState = { 
    name: string | null
    age: number | null
}

const initialState: UserState = {
    name: null,
    age: null
}


const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name;
            state.age = action.payload.age;
        },
        clearuser: (state) => {
            state.name = null
            state.age = null
        }
    }
})


export const { setUser, clearuser } = userSlice.actions
export default userSlice.reducer
