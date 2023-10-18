import { useEffect } from "react";
import axios from "../utils/axios";

function ProjectsPage() {
  async function fetchProjects() {
    const { data } = await axios.get("/projects");
    console.log(data);
  }
  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <p>Projects</p>
    </>
  );
}

export default ProjectsPage;
