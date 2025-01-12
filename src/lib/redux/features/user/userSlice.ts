import { IUser } from '@/types/auth.types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IUser = null

const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    user: (state, actions) => { 
       return state = actions.payload
     },
  },
});

export const { user } = counterSlice.actions;
export default counterSlice.reducer;