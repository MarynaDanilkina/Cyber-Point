import { createSlice } from '@reduxjs/toolkit';
export type IInitialState = {
  user: boolean;
  modalDiscord: boolean;
  modalFaceit: boolean;
  modalTeamNew: boolean;
  LogoTeams: string;
  BanerTeams: string;
};
export const initialState: IInitialState = {
  user: false,
  modalDiscord: false,
  modalFaceit: false,
  modalTeamNew: false,
  LogoTeams: '/logoTeamNew.png',
  BanerTeams: '/Banner.png',
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
    },
    openModalNewTeam(state) {
      state.modalTeamNew = true;
    },
    addLogoTeams(state, action) {
      state.LogoTeams = action.payload;
    },
    addBannerTeams(state, action) {
      state.BanerTeams = action.payload;
    },
  },
});
export default reduserSlice.reducer;
