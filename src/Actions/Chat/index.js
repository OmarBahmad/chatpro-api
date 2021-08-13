import api from "../../Api/api";

// Retorna a lista de chats
export const getChat = async () => {
  let summary = [];
  try {
    const { data } = await api.get("/api/v1/chats", {
      headers: { authorization: "00pt9ch94njesn0prrrcyo3i5wcwuu" },
    });
    summary = data;
  } catch (error) {
    alert("Erro ao buscar a lista de chats");
  }
  return summary;
};
