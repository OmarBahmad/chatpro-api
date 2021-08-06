import api from '../../Api/api'

export const createPost = async (params) => {
    let summary = [];
    try {
      const { data } = await api.post("/api/v1/send_message", JSON.stringify(params), { headers: { 'Content-Type': 'application/json', 'authorization': 'u8wivm37yncm4stjjrhli6av3jqzru' } });
      summary = data;
    } catch (error) {
      alert("Ocorreu um erro ao cadastrar os items");
    }
    return summary;
  }