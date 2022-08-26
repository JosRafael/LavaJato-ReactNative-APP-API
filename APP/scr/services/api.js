import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.137.1:4200/",
});

export default api;
