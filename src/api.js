import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const apiUrl = "/choreo-apis/awbo/backend/rest-api-be2/v1.0";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const fetchTodos = async () => {
  const response = await api.get("todos/");
  return response.data;
};

export const addTodo = async (todo) => {
  const response = await api.post("todos/", todo);
  return response.data;
};

export const updateTodo = async (id, todo) => {
  const response = await api.put(`todos/${id}/`, todo);
  return response.data;
};

export const deleteTodo = async (id) => {
  await api.delete(`todos/${id}/`);
};

export default api;
