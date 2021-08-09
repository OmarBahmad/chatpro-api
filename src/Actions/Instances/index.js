import api from "../../Api/api";

// Gerar um novo QRCode
export const getQRCode = async () => {
  let summary = [];
  try {
    const { data } = await api.get("/api/v1/generate_qrcode", {
      headers: { authorization: "bdfj464v5dnfzunss6bb58ui7fmbk5" },
    });
    summary = data;
  } catch (error) {
    alert("Erro ao gerar um novo QR Code");
  }
  return summary;
};

// Reconectar uma Instância
export const getReloadInstance = async () => {
  let summary = [];
  try {
    const { data } = await api.get("/api/v1/reload", {
      headers: { authorization: "bdfj464v5dnfzunss6bb58ui7fmbk5" },
    });
    summary = data;
  } catch (error) {
    alert("Erro ao Reconectar a Instância");
  }
  return summary;
};

// Desconectar do WhatsApp
export const DisconnectWhatsapp = async () => {
  let summary = [];
  try {
    const { data } = await api.get("/api/v1/remove_session", {
      headers: { authorization: "bdfj464v5dnfzunss6bb58ui7fmbk5" },
    });
    summary = data;
  } catch (error) {
    alert("Erro ao Desconectar do WhatsApp");
  }
  return summary;
};

// Obter Stats do aparelho
export const getStatusCellphone = async () => {
  let summary = [];
  try {
    const { data } = await api.get("/api/v1/status", {
      headers: { authorization: "bdfj464v5dnfzunss6bb58ui7fmbk5" },
    });
    summary = data;
  } catch (error) {
    alert("Erro ao buscar status do Aparelho");
  }
  return summary;
};

// Atualizar foto do perfil do Whatsapp
export const updatePhoto = async (params) => {
  let summary = [];
  try {
    const { data } = await api.post(
      "/api/v1/update_profile_pic",
      JSON.stringify(params),
      {
        headers: {
          "Content-Type": "application/json",
          authorization: "bdfj464v5dnfzunss6bb58ui7fmbk5",
        },
      }
    );
    summary = data;
  } catch (error) {
    alert("Erro ao atualizar a imagem de perfil");
  }
  return summary;
};

// Atualiza o webhook que vai receber os eventos
export const updateWebhook = async (params) => {
  let summary = [];
  try {
    const { data } = await api.post("/api/v1/webhook", JSON.stringify(params), {
      headers: {
        "Content-Type": "application/json",
        authorization: "bdfj464v5dnfzunss6bb58ui7fmbk5",
      },
    });
    summary = data;
  } catch (error) {
    alert("Erro ao atualizar o webhook");
  }
  return summary;
};
