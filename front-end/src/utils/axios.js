import axios from "axios";

const url = import.meta.env.VITE_BACK_END_API;

const axiosInstance = axios.create({
  baseURL: url,
});

export default axiosInstance;
