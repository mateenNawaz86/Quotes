import { createSlice } from "@reduxjs/toolkit";

const initialState = { showMenu: false, isAddingComment: false };

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
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
