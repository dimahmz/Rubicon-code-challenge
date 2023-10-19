import { createSlice } from "@reduxjs/toolkit";

export const AppSlice = createSlice({
  name: "app",
  initialState: {
    errorResponse: { title: "", openModal: false, description: "" },
    openDeleteModal: false,
    openEditModal: false,
  },
  reducers: {
    setErrorResponse: (state, action) => {
      state.errorResponse = action.payload;
    },
    setOpenDeleteModal: (state, action) => {
      state.openDeleteModal = action.payload;
    },
    setOpenEditModal: (state, action) => {
      state.openEditModal = action.payload;
    },
  },
});

export const { setErrorResponse, setOpenDeleteModal, setOpenEditModal } =
  AppSlice.actions;

export default AppSlice.reducer;
