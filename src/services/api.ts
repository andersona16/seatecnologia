import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      console.error("Erro de resposta da API:", error.response.status);
    } else if (error.request) {
      console.error("Erro na solicitação para a API:", error.request);
    } else {
      console.error(
        "Erro ao configurar a solicitação para a API:",
        error.message
      );
    }
    return Promise.reject(error);
  }
);

export default api;
