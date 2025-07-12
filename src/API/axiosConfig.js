import axios from "axios";

const axiosBase = axios.create({
  // This is for local host
  // baseURL: "http://localhost:5500/api"

  // For deployed version
  baseURL: "https://evangadiforum-backend-final-au5c.onrender.com",
});
export default axiosBase;
