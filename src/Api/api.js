import axios from 'axios';

const api = axios.create({
  baseURL: 'https://v4.chatpro.com.br/chatpro-j6p8fnxozu'
});

export default api;