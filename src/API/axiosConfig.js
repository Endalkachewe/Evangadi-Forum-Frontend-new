import axios from "axios";

const axiosBase = axios.create({
  // This is for local host
  // baseURL: "http://localhost:5500/api"

  // For deployed version
  baseURL: "https://evangadi-forum-backend-new.onrender.com",
});
export default axiosBase;
