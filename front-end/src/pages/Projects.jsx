import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { addElement, setTable, setErrorResponse } from "../store/projectsSice";
import Project from "../utils/APIs";
import { getYearMonthDay } from "../utils/time";
import { MdCalendarMonth, MdEdit, MdDelete } from "react-icons/md";
import CreateElementModal from "../components/CreatElementModal";
import ErrorModal from "../components/ErrorModal";

function ProjectsPage() {
  const dispatch = useDispatch();

  const projects = useSelector((store) => store.projects.projects);

  async function fetchProjects() {
    const response = await Project.getProjects();

    if (!response.success) return alert(response.title);

    dispatch(setTable(response.payload));
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  async function handleSubmition(newProject) {
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

  return (
    <>
      <CreateElementModal onSubmitForm={handleSubmition} />
      <ErrorModal />
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
                {getYearMonthDay(project.starting_date)}
              </td>
              <td>
                <MdCalendarMonth />
                {getYearMonthDay(project.ending_date)}
              </td>
              <td>{getYearMonthDay(project.createdAt)}</td>
              <td>{getYearMonthDay(project.updatedAt)}</td>
              <td>
                <div>
                  <MdEdit />
                  <MdDelete />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default ProjectsPage;
