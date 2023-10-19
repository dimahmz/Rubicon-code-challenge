import { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import CreateElementModal from "../components/CreatElementModal";
import ConfirmDeleteModal from "../components/confirmDeleteModal";
import ErrorModal from "../components/ErrorModal";
import EditElementModal from "../components/EditElementModal";
import Project from "../utils/APIs";
import {
  addElement,
  deleteElement,
  updateElement,
  setTable,
  setErrorResponse,
} from "../store/projectsSice";
import ProjectsTable from "../components/ProjectsTable";
import AddProjectHeader from "../components/addProjectHeader";

function ProjectsPage() {
  const dispatch = useDispatch();

  const [isloading, setIsLoading] = useState(false);

  const projects = useSelector((store) => store.projects.projects);

  const selectedProject = useSelector(
    (store) => store.projects.selectedProject
  );

  async function fetchProjects() {
    setIsLoading(true);

    const response = await Project.getProjects();

    if (!response.success) return alert(response.title);

    dispatch(setTable(response.payload));

    setIsLoading(false);
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  async function handleCreateProject(newProject) {
    const response = await Project.createProject(newProject);
    if (response.success) {
      dispatch(addElement(response.payload));
    } else {
      dispatch(
        setErrorResponse({
          title: response.title,
          openModal: true,
          description: response.description,
        })
      );
    }
    return response;
  }

  async function handleUpdateProject(editedProject) {
    const response = await Project.updateProject(editedProject);
    if (response.success) {
      dispatch(updateElement(editedProject));
    } else {
      dispatch(
        setErrorResponse({
          title: response.title,
          openModal: true,
          description: response.description,
        })
      );
    }
    return response;
  }

  async function deleteProject() {
    const { _id } = selectedProject;
    const response = await Project.deleteProject(_id);
    if (!response.success) alert(response.title);
    else dispatch(deleteElement(selectedProject));
    return response;
  }

  return (
    <>
      <div className="create-item-header">
        <CreateElementModal
          onSubmitForm={handleCreateProject}
          CustomHeader={AddProjectHeader}
        />
      </div>
      <ErrorModal />
      <ConfirmDeleteModal handleDelete={deleteProject} />
      <EditElementModal
        onSubmitForm={handleUpdateProject}
        selectedElement={selectedProject}
      />
      {isloading ? (
        <div className="table-loader">
          <Spinner color="primary">loading ...</Spinner>
        </div>
      ) : projects.length == 0 ? (
        <p
          style={{
            margin: "100px",
            textAlign: "center",
            fontSize: "17px",
            fontWeight: "500",
          }}
        >
          There is no Project!
        </p>
      ) : (
        <ProjectsTable />
      )}
    </>
  );
}

export default ProjectsPage;
