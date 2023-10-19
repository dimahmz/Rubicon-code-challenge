import { createSlice } from "@reduxjs/toolkit";

export const ProjectsSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [],
    errorResponse: { title: "", openModal: false, description: "" },
    openDeleteModal: false,
    openEditModal: false,
    selectedProject: {
      _id: "",
      label: "",
      description: "",
      ending_date: "",
      starting_date: "",
      createdAt: "",
      updatedAt: "",
    },
  },
  reducers: {
    addElement: (state, action) => {
      state.projects.push(action.payload);
    },
    updateElement: (state, action) => {
      const $id = action.payload._id;
      const editedProject = action.payload;
      state.projects = state.projects.map((project) => {
        if (project._id == $id) return editedProject;
        return project;
      });
    },
    deleteElement: (state, action) => {
      const $project = action.payload;
      const filtredProjects = state.projects.filter(
        (project) => project._id != $project._id
      );
      state.projects = filtredProjects;
    },
    setTable: (state, action) => {
      const $projects = action.payload;
      state.projects = $projects;
    },
    emptyTable: (state) => {
      state.projects = [];
    },
    setSelectedProject: (state, action) => {
      state.selectedProject = action.payload;
    },
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

export const {
  addElement,
  updateElement,
  deleteElement,
  setSelectedProject,
  setTable,
  emptyTable,
  setErrorResponse,
  setOpenDeleteModal,
  setOpenEditModal,
} = ProjectsSlice.actions;

export default ProjectsSlice.reducer;
