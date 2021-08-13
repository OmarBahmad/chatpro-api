import api from "../../Api/api";

const keyAuthorization = "00pt9ch94njesn0prrrcyo3i5wcwuu"

// Enviar mensagem de texto de texto
export const sendMessage = async (params) => {
  let summary = [];
  try {
    const { data } = await api.post(
      "/api/v1/send_message",
      JSON.stringify(params),
      {
        headers: {
          "Content-Type": "application/json",
          authorization: keyAuthorization,
        },
        timeout: 2500,
      }
    );
    summary = data;
  } catch (error) {
    // alert("Erro ao enviar mensagem.");
  }
  return summary;
};

// Excluir mensagem
export const deleteMessage = async (params) => {
  let summary = [];
  try {
    const { data } = await api.post(
      "/api/v1/delete_message",
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
    alert("Erro ao apagar mensagem");
  }
  return summary;
};

// Enviar a localização
export const sendLocation = async (params) => {
  let summary = [];
  try {
    const { data } = await api.post(
      "/api/v1/send_location",
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
    alert("Erro ao enviar localização.");
  }
  return summary;
};

// Enviar arquivo
export const sendFile = async (params) => {
  let summary = [];
  try {
    const { data } = await api.post(
      "/api/v1/send_message_file_from_url",
      JSON.stringify(params),
      {
        headers: {
          "Content-Type": "application/json",
          authorization: keyAuthorization,
        },
        timeout: 4000,
      }
    );
    summary = data;
  } catch (error) {
    alert("Erro ao enviar arquivo.");
  }
  return summary;
};

//Enviar uma mensagem de texto usando template
export const sendMessageTemplate = async (params) => {
  let summary = [];
  try {
    const { data } = await api.post(
      "/api/v1/send_message_template",
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
    alert("Erro ao enviar mensagem.");
  }
  return summary;
};

//Enviar contato para um número
export const sendContact = async (params) => {
  let summary = [];
  try {
    const { data } = await api.post(
      "/api/v1/send_vcard",
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
    alert("Erro ao enviar contato.");
  }
  return summary;
};
