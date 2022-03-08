import { createSlice } from "@reduxjs/toolkit";

const initialState = { showMenu: false };

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMenu(state) {
      state.showMenu = !state.showMenu;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
