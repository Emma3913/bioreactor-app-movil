import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://cecily-unprotuberant-mathilde.ngrok-free.dev",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use((config) => {
  return config;
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);
