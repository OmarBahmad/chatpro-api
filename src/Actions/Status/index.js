import { api, keyAuthorization } from "../../Api/api";

// Enviar imagem para o stories (status)
export const sendImageStatus = async (params) => {
  let summary = [];
  try {
    const { data } = await api.post(
      "/api/v1/send-image-status",
      JSON.stringify(params),
      {
        headers: {
          "Content-Type": "application/json",
          authorization: keyAuthorization,
        },
      }
    );
    summary = data;
  } catch (error) {
    alert("Erro ao enviar a imagem para o stories (status)");
  }
  return summary;
};

// Enviar texto para o stories (status)
export const sendTextStatus = async (params) => {
  let summary = [];
  try {
    const { data } = await api.post(
      "/api/v1/send-text-status",
      JSON.stringify(params),
      {
        headers: {
          "Content-Type": "application/json",
          authorization: keyAuthorization,
        },
      }
    );
    summary = data;
  } catch (error) {
    alert("Erro ao enviar o texto para o stories (status)");
  }
  return summary;
};
