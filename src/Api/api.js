import axios from 'axios';

const chatID = JSON.parse(localStorage.getItem('@chatID'));

export const api = axios.create({
  baseURL: `https://v4.chatpro.com.br/${chatID}`,
});

export const keyAuthorization = JSON.parse(localStorage.getItem('@tokenID'));

export default api;
