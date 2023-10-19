import { createSlice } from "@reduxjs/toolkit";

export const TasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    selectedTask: {
      _id: "",
      label: "",
      description: "",
      ending_date: "",
      starting_date: "",
      createdAt: "",
      updatedAt: "",
    },
  },
  reducers: {
    addElement: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateElement: (state, action) => {
      const $id = action.payload._id;
      const editedTask = action.payload;
      state.tasks = state.tasks.map((task) => {
        if (task._id == $id) return editedTask;
        return task;
      });
    },
    deleteElement: (state, action) => {
      const $task = action.payload;
      const filtredTasks = state.tasks.filter((task) => task._id != $task._id);
      state.tasks = filtredTasks;
    },
    setTable: (state, action) => {
      const $tasks = action.payload;
      state.tasks = $tasks;
    },
    emptyTable: (state) => {
      state.tasks = [];
    },
    setSelectedTask: (state, action) => {
      state.selectedTask = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addElement,
  updateElement,
  deleteElement,
  setSelectedTask,
  setTable,
  emptyTable,
} = TasksSlice.actions;

export default TasksSlice.reducer;
