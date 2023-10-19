import axios from "../../utils/axios";

const internalError = {
  success: false,
  title: "An error has occurred",
};

export default class Task {
  static async getTasks() {
    try {
      const response = await axios.get("/tasks");
      return response.data;
    } catch (e) {
      if (e?.response?.data) {
        return e.response.data;
      }
      return internalError;
    }
  }
  static async createTask(task) {
    try {
      const response = await axios.post("/tasks", { ...task });
      return response.data;
    } catch (e) {
      if (e?.response?.data) {
        return e.response.data;
      }
      return internalError;
    }
  }
  static async deleteTask(id) {
    try {
      const response = await axios.delete(`/tasks/${id}`);
      return response.data;
    } catch (e) {
      if (e?.response?.data) {
        return e.response.data;
      }
      return internalError;
    }
  }

  static async updateTask({ id, element }) {
    try {
      const response = await axios.put(`/tasks/${id}`, { ...element });
      return response.data;
    } catch (e) {
      if (e?.response?.data) {
        return e.response.data;
      }
      return internalError;
    }
  }
}
