import axios from "../utils/axios";

const internalError = {
  success: false,
  title: "An error has occurred",
};

export default class Project {
  static async getProjects() {
    try {
      const response = await axios.get("/projects");
      return response.data;
    } catch (e) {
      if (e?.response?.data) {
        return e.response.data;
      }
      return internalError;
    }
  }
  static async createProject(project) {
    try {
      const response = await axios.post("/projects", { ...project });
      return response.data;
    } catch (e) {
      if (e?.response?.data) {
        return e.response.data;
      }
      return internalError;
    }
  }
  static async deleteProject(id) {
    try {
      const response = await axios.delete(`/projects/${id}`);
      return response.data;
    } catch (e) {
      if (e?.response?.data) {
        return e.response.data;
      }
      return internalError;
    }
  }

  static async updateProject({ id, project }) {
    console.log(project);
    try {
      const response = await axios.put(`/projects/${id}`, { ...project });
      return response.data;
    } catch (e) {
      console.log(e);
      if (e?.response?.data) {
        return e.response.data;
      }
      return internalError;
    }
  }
}
