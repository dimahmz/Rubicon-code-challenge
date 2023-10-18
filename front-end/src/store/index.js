import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projectsSice";

export default configureStore({
  reducer: {
    projects: projectsReducer,
  },
});
