import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import HomePage from "./Home";
import NavBarLayout from "./layouts/navBarLayout";
import TasksPage from "./Tasks";
import ProjectsPage from "./Projects";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route element={<NavBarLayout />}>
          <Route path="tasks" element={<TasksPage />} />
          <Route path="projects" element={<ProjectsPage />} />
        </Route>
      </Route>
    </>
  )
);

export default router;
