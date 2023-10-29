import axios from "axios";

export const http = axios.create({
  baseURL: 'https://fepruebatecnicaculqi-backend-production.up.railway.app',
  headers: { "Content-Type": "application/json" },
});
