import axios from 'axios';

const api = axios.create({
  baseURL: 'https://v4.chatpro.com.br/chatpro-zr3aabplh4'
});

export default api;