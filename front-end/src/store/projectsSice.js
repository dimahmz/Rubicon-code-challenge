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
      status: "",
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
      console.log(state.projects);
    },
    deleteElement: (state, action) => {
      const $project = action.payload;
      const filtredProjects = state.projects.filter(
        (project) => project._id == $project._id
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
    setSelectedElement: (state, action) => {
      state.selectedElement = action.payload;
    },

    setErrorResponse: (state, action) => {
      state.errorResponse = action.payload;
    },
    setOpenDeleteModal: (state, action) => {
      state.openDeleteModal = action.payload.open;
      state.selectedProject = action.payload.project;
    },
    setOpenEditModal: (state, action) => {
      state.openEditModal = action.payload.open;
      state.selectedProject = action.payload.project;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addElement,
  updateElement,
  deleteElement,
  setSelectedElement,
  setTable,
  emptyTable,
  setErrorResponse,
  setOpenDeleteModal,
  setOpenEditModal,
} = ProjectsSlice.actions;

export default ProjectsSlice.reducer;
