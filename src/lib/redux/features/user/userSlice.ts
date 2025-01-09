import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 6 };

const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;