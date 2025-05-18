import axios, { type AxiosError, type AxiosInstance } from 'axios';

const BACKEND_URL = `${import.meta.env.VITE_SERVER}`;
const REQUEST_TIMEOUT = 5000;

interface ApiError {
  message: string;
  status: number;
}

interface ApiErrorResponse {
  message: string;
}

const api: AxiosInstance = axios.create({
  baseURL: BACKEND_URL,
  timeout: REQUEST_TIMEOUT,
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiErrorResponse>) => {
    const apiError: ApiError = {
      message: error.response?.data?.message || 'An unexpected error occurred',
      status: error.response?.status || 500,
    };
    return Promise.reject(apiError);
  }
);

export type { ApiError };
export default api;
