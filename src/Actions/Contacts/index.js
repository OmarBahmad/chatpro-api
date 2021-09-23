import { api, keyAuthorization } from '../../Api/api';

// Retorna a lista de contatos do celular
export const getContacts = async () => {
  let summary = [];
  try {
    const { data } = await api.get('/api/v1/contacts', {
      headers: { authorization: keyAuthorization },
    });
    summary = data;
  } catch (error) {
    console.log(error);
  }
  return summary;
};

// Obeter Nome e foto de um número do whatsapp
export const getProfile = async (params) => {
  let summary = [];
  try {
    const { data } = await api.post(
      '/api/v1/get_profile',
      JSON.stringify(params),
      {
        headers: {
          'Content-Type': 'application/json',
          authorization: keyAuthorization,
        },
      }
    );
    summary = data;
  } catch (error) {
    console.log(error);
  }
  return summary;
};
