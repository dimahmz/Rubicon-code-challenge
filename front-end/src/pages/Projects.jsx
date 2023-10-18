import { useEffect, useState } from "react";
import { Spinner, Table } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import CreateElementModal from "../components/CreatElementModal";
import ConfirmDeleteModal from "../components/confirmDeleteModal";
import ErrorModal from "../components/ErrorModal";
import EditElementModal from "../components/EditElementModal";
import Project from "../utils/APIs";
import { getDayMonthYear } from "../utils/time";
import { MdCalendarMonth, MdEdit, MdDelete } from "react-icons/md";
import {
  addElement,
  deleteElement,
  updateElement,
  setTable,
  setErrorResponse,
  setOpenDeleteModal,
  setOpenEditModal,
} from "../store/projectsSice";

function ProjectsPage() {
  const dispatch = useDispatch();

  const [isloading, setIsLoading] = useState(false);
  const projects = useSelector((store) => store.projects.projects);

  const selectedProject = useSelector(
    (store) => store.projects.selectedProject
  );

  async function fetchProjects() {
    const response = await Project.getProjects();

    if (!response.success) return alert(response.title);

    dispatch(setTable(response.payload));
  }

  useEffect(() => {
    setIsLoading(true);
    fetchProjects();
    setIsLoading(false);
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
    console.log(response);
    if (response.success) {
      dispatch(updateElement(response.payload));
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
      {/* Modals */}
      <CreateElementModal onSubmitForm={handleCreateProject} />
      <ErrorModal />
      <ConfirmDeleteModal handleDelete={deleteProject} />

      <EditElementModal
        onSubmitForm={handleUpdateProject}
        selectedElement={selectedProject}
      />

      {/* Table */}
      {isloading ? (
        <Spinner
          color="primary"
          style={{
            height: "3rem",
            width: "3rem",
          }}
        >
          loading ...
        </Spinner>
      ) : (
        <Table id="data-table" borderless>
          <thead>
            <tr>
              <th>Label</th>
              <th>Description</th>
              <th>Started At</th>
              <th>Ended At</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>actions</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project, i) => (
              <tr key={i}>
                <td>{project.label}</td>
                <td>{project.description}</td>
                <td>
                  <MdCalendarMonth />
                  {getDayMonthYear(project.starting_date)}
                </td>
                <td>
                  <MdCalendarMonth />
                  {getDayMonthYear(project.ending_date)}
                </td>
                <td>{getDayMonthYear(project.createdAt)}</td>
                <td>{getDayMonthYear(project.updatedAt)}</td>
                <td>
                  <div>
                    <MdEdit
                      onClick={() => {
                        dispatch(setOpenEditModal({ open: true, project }));
                      }}
                    />
                    <MdDelete
                      onClick={() => {
                        dispatch(setOpenDeleteModal({ open: true, project }));
                      }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
}

export default ProjectsPage;
