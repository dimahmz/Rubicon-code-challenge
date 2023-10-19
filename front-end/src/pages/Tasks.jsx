import { useEffect, useState } from "react";
import { Spinner, Label, Input, FormGroup } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import CreateElementModal from "../components/CreatElementModal";
import ConfirmDeleteModal from "../components/confirmDeleteModal";
import ErrorModal from "../components/ErrorModal";
import EditElementModal from "../components/EditElementModal";
import AddTaskHeader from "../components/addTaskHeader";
import TasksTable from "../components/TasksTable";
import { setErrorResponse } from "../store/appSlice";
import {
  addElement,
  deleteElement,
  updateElement,
  setTable,
} from "../store/tasksSlice";
import Task from "../utils/APIs/Task";
import Project from "../utils/APIs/Project";

function TasksPage() {
  const dispatch = useDispatch();

  const [projects, setProjects] = useState([]);

  const [SeletedProjectID, setSeletedProjectID] = useState(null);

  const [isloading, setIsLoading] = useState(false);

  const Tasks = useSelector((store) => store.tasks.tasks);

  const selectedTask = useSelector((store) => store.tasks.selectedTask);

  // fetch Tasks
  async function fetchTasks() {
    setIsLoading(true);
    const response = await Task.getTasks();
    if (!response.success) return alert(response.title);
    dispatch(setTable(response.payload));
    setIsLoading(false);
  }

  // fetch the tables
  async function fetchProjects() {
    const $response = await Project.getProjects();
    if (!$response.success) return alert($response.title);
    setProjects($response.payload);
  }

  useEffect(() => {
    fetchTasks();
    fetchProjects();
  }, []);

  async function handleCreateTask(newTask) {
    const $newTask = { ...newTask, project_id: SeletedProjectID };
    const response = await Task.createTask($newTask);
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

  async function handleUpdateTask(editedTask) {
    const response = await Task.updateTask(editedTask);
    if (response.success) {
      dispatch(updateElement(editedTask));
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

  async function deleteTask() {
    const { _id } = selectedTask;
    const response = await Task.deleteTask(_id);
    if (!response.success) alert(response.title);
    else dispatch(deleteElement(selectedTask));
    return response;
  }

  return (
    <>
      <div className="create-item-header">
        <CreateElementModal
          onSubmitForm={handleCreateTask}
          CustomHeader={AddTaskHeader}
          btnLabel="Add Task"
        >
          <FormGroup>
            <Label>Project</Label>
            <Input
              palceholder="Select project.."
              type="select"
              required
              onChange={(e) => setSeletedProjectID(e.target.value)}
            >
              <option value="">Select a project...</option>
              {projects.map((project, i) => (
                <option key={i} value={project._id}>
                  {project.label}
                </option>
              ))}
            </Input>
          </FormGroup>
        </CreateElementModal>
      </div>
      <ErrorModal />
      <ConfirmDeleteModal handleDelete={deleteTask} />
      <EditElementModal
        onSubmitForm={handleUpdateTask}
        selectedElement={selectedTask}
      />
      {isloading ? (
        <div className="table-loader">
          <Spinner color="primary">loading ...</Spinner>
        </div>
      ) : Tasks.length == 0 ? (
        <p
          style={{
            margin: "100px",
            textAlign: "center",
            fontSize: "17px",
            fontWeight: "500",
          }}
        >
          There is no Task!
        </p>
      ) : (
        <TasksTable />
      )}
    </>
  );
}

export default TasksPage;
