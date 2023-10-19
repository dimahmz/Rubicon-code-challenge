import { useDispatch, useSelector } from "react-redux";
import { setOpenDeleteModal, setOpenEditModal } from "../store/projectsSice";
import { getDayMonthYear } from "../utils/time";
import { MdCalendarMonth, MdDelete, MdEdit } from "react-icons/md";
import { Table } from "reactstrap";
import "../assets/styles/table.scss";

function ProjectsTable() {
  const projects = useSelector((store) => store.projects.projects);

  const dispatch = useDispatch();

  return (
    <Table id="data-table" borderless responsive>
      <thead>
        <tr className="table-header">
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
            <td className="label">{project.label}</td>
            <td className="description">{project.description}</td>
            <td>
              <div className="project-date">
                <MdCalendarMonth />
                {getDayMonthYear(project.starting_date)}
              </div>
            </td>
            <td>
              <div className="project-date">
                <MdCalendarMonth />
                {getDayMonthYear(project.ending_date)}
              </div>
            </td>
            <td>
              <div className="created-at">
                {getDayMonthYear(project.createdAt)}
              </div>
            </td>
            <td>
              <div className="updated-at">
                {getDayMonthYear(project.updatedAt)}
              </div>
            </td>
            <td>
              <div className="action-icons-container">
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
  );
}

export default ProjectsTable;
