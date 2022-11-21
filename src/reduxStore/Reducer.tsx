import { createSlice } from '@reduxjs/toolkit';
export type IInitialState = {
  user: boolean;
  modalDiscord: boolean;
  modalFaceit: boolean;
};
export const initialState: IInitialState = {
  user: false,
  modalDiscord: false,
  modalFaceit: false,
};

export const reduserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state) {
      state.user = true;
    },
    openModalDiscord(state) {
      state.modalDiscord = true;
    },
    closeModalDiscord(state) {
      state.modalDiscord = false;
    },
    openModalFaceit(state) {
      state.modalFaceit = true;
    },
    closeModalFaceit(state) {
      state.modalFaceit = false;
    }
  },
});
export default reduserSlice.reducer;
