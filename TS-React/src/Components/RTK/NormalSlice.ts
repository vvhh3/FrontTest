import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { removeUser } from "./UserSlice"
import type { RootState } from "./store"

type User = {
    id: number
    name: null | string
}

const userAdapter =  createEntityAdapter<User>()

const initialState = userAdapter.getInitialState()

const userSlice = createSlice({
    name: "userNormal",
    initialState,
    reducers: {
        addUser: userAdapter.addOne,
        addUsers: userAdapter.addMany,
        removeUser: userAdapter.removeOne,
        updateUser: userAdapter.updateOne,
        setUsers: userAdapter.setAll,
        clearUsers: userAdapter.removeAll,
    }
})

export const selectors = userAdapter.getSelectors(
    (state: RootState) => state.userNormal
)

export default userSlice.reducer

export const { addUser, addUsers, updateUser, setUsers, clearUsers } = userSlice.actions