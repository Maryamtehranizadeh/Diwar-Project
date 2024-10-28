import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  //   baseURL: "http://localhost:3400/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
