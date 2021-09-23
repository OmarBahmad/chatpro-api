import { api, keyAuthorization } from '../../Api/api';

// Retorna a lista de chats
export const getChat = async () => {
  let summary = [];
  try {
    const { data } = await api.get('/api/v1/chats', {
      headers: { authorization: keyAuthorization },
      timeout: 5000,
    });
    summary = data;
  } catch (error) {
    console.log(error);
  }
  return summary;
};
