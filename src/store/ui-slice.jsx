import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMenu: false,
  isAddingComment: false,
  isEntering: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMenu(state) {
      state.showMenu = !state.showMenu;
    },

    addComment(state) {
      state.isAddingComment = !state.isAddingComment;
    },
    setEntering(state) {
      state.isEntering = !state.isEntering;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
