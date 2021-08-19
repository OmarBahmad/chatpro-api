import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { sendMessage } from "../../../../Actions/Message";

export default function SendUniqueMessage() {
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");

  async function sendM() {
    const obj = {
      number: number.toString(),
      message: message.toString(),
    };
    try {
      const resp = await sendMessage(obj);
      if (resp.status) {
        toast.success("Mensagem Enviada com sucesso!");
      } else {
        toast.error("Mensagem Não Enviada!");
      }
    } catch (err) {
      console.log("erro");
    }
  }

  return (
    <div>
      <h3>Enviar uma mensagem</h3>
      <input
        placeholder="Numero do telefone"
        className="input-msg"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <input
        placeholder="Mensagem"
        className="input-msg"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendM}>Enviar Mensagem</button>
    </div>
  );
}
