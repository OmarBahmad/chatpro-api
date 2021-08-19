import React, { useState } from "react";
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
      await deleteMessage(obj);
      alert("Mensagem Apagada com sucesso.");
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
