import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    cube: 0,
  },
  reducers: {
    // action
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    incrementByValue: (state, action) => {
      state.count = state.count + action.payload;
    },
    setCube: (state, action) => {
      state.cube = action.payload;
    },
  },
});

export const { increment, decrement, incrementByValue, setCube } =
  counterSlice.actions;

export default counterSlice.reducer;
