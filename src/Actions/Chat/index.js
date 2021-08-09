import api from "../../Api/api";

// Retorna a lista de chats
export const getChat = async () => {
  let summary = [];
  try {
    const { data } = await api.get("/api/v1/chats", {
      headers: { authorization: "bdfj464v5dnfzunss6bb58ui7fmbk5" },
    });
    summary = data;
  } catch (error) {
    alert("Erro ao buscar a lista de chats");
  }
  return summary;
};