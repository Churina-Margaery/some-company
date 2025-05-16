import axios from 'axios';

const BACKEND_URL = <string>import.meta.env.VITE_SERVER;
const REQUEST_TIMEOUT = 5000;

const api = axios.create({
  baseURL: BACKEND_URL,
  timeout: REQUEST_TIMEOUT,
});

export default api;
