import axios from "axios";

export const api = axios.create({
  baseURL: "https://v4.chatpro.com.br/chatpro-06w2ulglob",
});

export const keyAuthorization = "aup3r4sg9rstg1u2y4a8lo0q4y8jpy";

export default api;
