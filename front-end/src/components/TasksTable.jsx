import { useDispatch, useSelector } from "react-redux";
import { setSelectedTask } from "../store/tasksSlice";
import { setOpenDeleteModal, setOpenEditModal } from "../store/appSlice";
import { getDayMonthYear } from "../utils/time";
import { MdCalendarMonth, MdDelete, MdEdit } from "react-icons/md";
import { Table } from "reactstrap";
import "../assets/styles/table.scss";

function tasksTable() {
  const tasks = useSelector((store) => store.tasks.tasks);
  console.log(tasks);

  const dispatch = useDispatch();

  return (
    <Table className="data-table" borderless responsive>
      <thead>
        <tr className="table-header">
          <th>Label</th>
          <th>Description</th>
          <th>Started At</th>
          <th>Ended At</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, i) => (
          <tr key={i}>
            <td className="label">{task.label}</td>
            <td className="description">{task.description}</td>
            <td>
              <div className="element-date">
                <MdCalendarMonth />
                {getDayMonthYear(task.starting_date)}
              </div>
            </td>
            <td>
              <div className="element-date">
                <MdCalendarMonth />
                {getDayMonthYear(task.ending_date)}
              </div>
            </td>
            <td>
              <div className="created-at">
                {getDayMonthYear(task.createdAt)}
              </div>
            </td>
            <td>
              <div className="updated-at">
                {getDayMonthYear(task.updatedAt)}
              </div>
            </td>
            <td>
              <div className="action-icons-container">
                <MdEdit
                  onClick={() => {
                    dispatch(setOpenEditModal(true));
                    dispatch(setSelectedTask(task));
                  }}
                />
                <MdDelete
                  onClick={() => {
                    dispatch(setOpenDeleteModal(true));
                    dispatch(setSelectedTask(task));
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

export default tasksTable;
