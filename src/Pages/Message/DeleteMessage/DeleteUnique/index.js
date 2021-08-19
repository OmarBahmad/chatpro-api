import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { deleteMessage } from "../../../../Actions/Message";

export default function DeleteUnique() {
  const [chatJid, setChatJid] = useState("");
  const [messageID, setMessageID] = useState("");

  async function deleteMsg() {
    const obj = {
      chatJid: "55" + chatJid.concat("@s.whatsapp.net"),
      messageID,
    };
    try {
      const resp = await deleteMessage(obj);
      if (resp.status === 200) {
        toast.success("Mensagem Enviada com sucesso!");
      } else {
        toast.error("Mensagem Não Apagada!");
      }
    } catch (err) {
      console.log("erro");
    }
    setChatJid("");
    setMessageID("");
  }
  return (
    <div>
      <h3>Excluir uma Mensagem</h3>
      <input
        placeholder="Numero do telefone sem o '9'"
        className="input-msg"
        value={chatJid}
        onChange={(e) => setChatJid(e.target.value)}
      />
      <input
        placeholder="Id da Mensagem"
        className="input-msg"
        value={messageID}
        onChange={(e) => setMessageID(e.target.value)}
      />
      <button onClick={deleteMsg}>Excluir Mensagem</button>
    </div>
  );
}
