import axios, { CanceledError } from "axios";

export default axios.create({
  // baseURL: import.meta.env.API_BASE_URL
  baseURL: "http://localhost:8000/",
  headers: { "Content-Type": "application/json" },
});

export { CanceledError };
