import { ForkProps } from '@/types/types';
import { createSlice } from '@reduxjs/toolkit';


const initialState: ForkProps[] = []

const forks = createSlice({
  name: 'forks',
  initialState,
  reducers: {
    setForks(state, { payload }) {
      console.log(payload)
      return state = [...payload]
    },
  },
});

export const { setForks } = forks.actions;
export default forks.reducer;