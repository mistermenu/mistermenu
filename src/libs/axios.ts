import axios from "axios";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

export const axiosInstance = axios.create({ baseURL: BASE_API_URL });
