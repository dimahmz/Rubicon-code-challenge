import { createSlice } from "@reduxjs/toolkit";

export const ProjectsSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [],
  },
  reducers: {
    addElement: (state, action) => {
      state.projects.push(action.payload);
    },
    updateElement: (state) => {
      const id = state.action.payload.id;
      const editedProject = state.action.payload;
      state.projects.map((project) => {
        if (project.id == id) return editedProject;
        return project;
      });
    },
    deleteElement: (state, action) => {
      const index = action.payload;
      state.projects.splice(index, id);
    },
    setTable: (state, action) => {
      const $projects = action.paylaod;
      state.projects = $projects;
    },
    emptyTable: (state) => {
      state.projects = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addElement,
  updateElement,
  deleteElement,
  setTable,
  emptyTable,
} = ProjectsSlice.actions;

export default ProjectsSlice.reducer;
