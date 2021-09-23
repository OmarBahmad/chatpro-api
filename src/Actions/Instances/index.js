import { api, keyAuthorization } from '../../Api/api';

// Gerar um novo QRCode
export const getQRCode = async () => {
  let summary = [];
  try {
    const { data } = await api.get('/api/v1/generate_qrcode', {
      headers: { authorization: keyAuthorization },
    });
    summary = data;
  } catch (error) {
    console.log(error);
  }
  return summary;
};

// Reconectar uma Instância
export const getReloadInstance = async () => {
  let summary = [];
  try {
    const { data } = await api.get('/api/v1/reload', {
      headers: { authorization: keyAuthorization },
    });
    summary = data;
  } catch (error) {
    console.log(error);
  }
  return summary;
};

// Desconectar do WhatsApp
export const DisconnectWhatsapp = async () => {
  let summary = [];
  try {
    const { data } = await api.get('/api/v1/remove_session', {
      headers: { authorization: keyAuthorization },
    });
    summary = data;
  } catch (error) {
    console.log(error);
  }
  return summary;
};

// Obter Stats do aparelho
export const getStatusCellphone = async () => {
  let summary = [];
  try {
    const { data } = await api.get('/api/v1/status', {
      headers: { authorization: keyAuthorization },
    });
    summary = data;
  } catch (error) {
    console.log(error);
  }
  return summary;
};

// Atualizar foto do perfil do Whatsapp
export const updatePhoto = async (params) => {
  let summary = [];
  try {
    const { data } = await api.post(
      '/api/v1/update_profile_pic',
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

// Atualiza o webhook que vai receber os eventos
export const updateWebhook = async (params) => {
  let summary = [];
  try {
    const { data } = await api.post('/api/v1/webhook', JSON.stringify(params), {
      headers: {
        'Content-Type': 'application/json',
        authorization: keyAuthorization,
      },
    });
    summary = data;
  } catch (error) {
    console.log(error);
  }
  return summary;
};
