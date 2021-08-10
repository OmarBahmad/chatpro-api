import React, { useState } from "react";
import { deleteMessage } from "../../../Actions/Message";

export default function DeleteMessage() {
  const [chatJid, setChatJid] = useState("");
  const [messageID, setMessageID] = useState("");

  async function deleteMsg() {
    const obj = {
      chatJid: "55"+chatJid.concat("@s.whatsapp.net"),
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
      <h2>Excluir Mensagem</h2>
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

/*
      chatJid: "556282530552@s.whatsapp.net", //sem o 9
      messageID: "2B632CC4CCECA2E3FBA3",
*/
