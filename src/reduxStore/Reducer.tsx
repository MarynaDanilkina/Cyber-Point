import { createSlice } from '@reduxjs/toolkit';
export type IInitialState = {
  user: boolean;
  userFaceit: boolean;
  modalDiscord: boolean;
  modalFaceit: boolean;
  modalTeamNew: boolean;
  modalSuccess: boolean;
  modalExit: boolean;
  LogoTeams: string;
  BanerTeams: string;
};
export const initialState: IInitialState = {
  user: false,
  userFaceit:false,
  modalDiscord: false,
  modalFaceit: false,
  modalTeamNew: false,
  modalExit: false,
  modalSuccess: false,
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
    deleteLogin(state) {
      state.user = false;
    },
    loginFaceit(state) {
      state.userFaceit = true;
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
    closeModalNewTeam(state) {
      state.modalTeamNew = false;
    },
    openModalExit(state) {
      state.modalExit = true;
    },
    closeModalExit(state) {
      state.modalExit = false;
    },
    addLogoTeams(state, action) {
      state.LogoTeams = action.payload;
    },
    addBannerTeams(state, action) {
      state.BanerTeams = action.payload;
    },
    openModalSuccess(state) {
      state.modalSuccess = true;
    },
    closeModalSuccess(state) {
      state.modalSuccess = false;
    }
  },
});
export default reduserSlice.reducer;
