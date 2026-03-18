import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fish: 0,
}

const fishSlice = createSlice({
    name:"fish",
    initialState,
    reducers:{
        plusFish: (state) => {state.fish += 1},
        minusFish: (state) => {state.fish -= 1},
        removeAllFish: (state) => {state.fish = 0},
    },
})

export const {plusFish , minusFish, removeAllFish} = fishSlice.actions
export default fishSlice.reducer;