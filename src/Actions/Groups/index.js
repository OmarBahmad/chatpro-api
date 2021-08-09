import api from '../../Api/api'

// Criar um novo grupo
export const createGroup = async (params) => {
    let summary = [];
    try {
      const { data } = await api.post("/api/v1/create_group", JSON.stringify(params), { headers: { 'Content-Type': 'application/json', 'authorization': 'bdfj464v5dnfzunss6bb58ui7fmbk5' } });
      summary = data;
    } catch (error) {
      alert("Erro ao criar um novo grupo");
    }
    return summary;
  }

  // Sair de um grupo
export const leaveGroup = async (params) => {
  let summary = [];
  try {
    const { data } = await api.post("/api/v1/leave_group", JSON.stringify(params), { headers: { 'Content-Type': 'application/json', 'authorization': 'bdfj464v5dnfzunss6bb58ui7fmbk5' } });
    summary = data;
  } catch (error) {
    alert("Erro ao sair do grupo");
  }
  return summary;
}
