import api from "../../Api/api";

// Retorna a lista de contatos do celular
export const getContacts = async () => {
  let summary = [];
  try {
    const { data } = await api.get("/api/v1/contacts", {
      headers: { authorization: "00pt9ch94njesn0prrrcyo3i5wcwuu" },
    });
    summary = data;
  } catch (error) {
    alert("Erro ao buscar a lista de chats");
  }
  return summary;
};

// Obeter Nome e foto de um número do whatsapp
export const getProfile = async (params) => {
  let summary = [];
  try {
    const { data } = await api.post(
      "/api/v1/get_profile",
      JSON.stringify(params),
      {
        headers: {
          "Content-Type": "application/json",
          authorization: "00pt9ch94njesn0prrrcyo3i5wcwuu",
        },
      }
    );
    summary = data;
  } catch (error) {
    alert("Erro ao buscar o contato.");
  }
  return summary;
};
