import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bears: 0,
};

const bearSlice = createSlice({
  name: "bear",
  initialState,
  reducers: {
    plusBear: (state) => {
      state.bears += 1;
    },
    minusBear: (state) => {
      state.bears -= 1;
    },
    removeAllBear: (state) => {
      state.bears = 0;
    },
  },
});

export const { plusBear, minusBear, removeAllBear } = bearSlice.actions;
export default bearSlice.reducer;4