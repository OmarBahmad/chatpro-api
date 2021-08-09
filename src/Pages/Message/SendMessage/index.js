import React, { useState } from "react";
import { sendMessage } from "../../../Actions/Message";

export default function SendMessage() {
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");

  async function sendM() {
    const obj = {
      number: number,
      message: message,
    };
    try {
      await sendMessage(obj);
      alert("Mensagem enviada com sucesso.");
    } catch (err) {
      console.log("erro");
    }
    setMessage("");
    setNumber("");
  }
  return (
    <div>
      <h2>Enviar Mensagem</h2>
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
