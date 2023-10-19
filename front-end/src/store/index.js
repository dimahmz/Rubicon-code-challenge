import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projectsSlice";
import tasksReducer from "./tasksSlice";
import appReducer from "./appSlice";

export default configureStore({
  reducer: {
    projects: projectsReducer,
    tasks: tasksReducer,
    app: appReducer,
  },
});
