import React, { useState } from "react";
import { deleteMessage } from "../../../Actions/Message";

export default function DeleteMessage() {
  const [chatJid, setChatJid] = useState("");
  const [messageID, setMessageID] = useState("");

  async function deleteMsg() {
    const nova = chatJid.includes("@s.whatsapp.net");

    const obj = {
      chatJid: chatJid,
      messageID: messageID,
    };
    try {
      await deleteMessage(obj);
      alert("Mensagem enviada com sucesso.");
    } catch (err) {
      console.log("erro");
    }
    setChatJid("");
    setMessageID("");
  }
  return (
    <div>
      <h2>Excluir Mensagem</h2>
      <input
        placeholder="Numero do telefone"
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
