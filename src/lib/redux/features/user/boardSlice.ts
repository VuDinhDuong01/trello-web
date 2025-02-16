
import { IBoard } from '@/types/boardTypes';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IBoard = null

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    board: (state, actions) => { 
       return state = actions.payload
     },
  },
});

export const { board } = boardSlice.actions;
export default boardSlice.reducer;