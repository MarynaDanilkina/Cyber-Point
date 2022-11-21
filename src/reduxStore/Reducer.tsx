import { createSlice } from '@reduxjs/toolkit';
export type IInitialState = {
  user: boolean;
};
export const initialState: IInitialState = {
  user: false
};

export const reduserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state) {
      state.user = true;
    },
  },
});
export default reduserSlice.reducer;
