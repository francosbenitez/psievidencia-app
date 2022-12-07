import axios from "axios";

const instance = axios.create({
  baseURL: "https://web-main.up.railway.app",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
