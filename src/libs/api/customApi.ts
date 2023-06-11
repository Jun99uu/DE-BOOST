import axios from "axios";

export const baseURL = import.meta.env.VITE_BASE_URL;

const customAPI = axios.create({
  baseURL: baseURL,
});

export default customAPI;
