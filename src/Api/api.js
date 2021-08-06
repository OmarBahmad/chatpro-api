import axios from 'axios';

const api = axios.create({
  baseURL: 'https://v4.chatpro.com.br/chatpro-vxn253oqjk'
});

export default api;