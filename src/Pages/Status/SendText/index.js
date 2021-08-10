import React, { useState } from "react";
import { sendTextStatus } from "../../../Actions/Status";

export default function SendText() {
  const [textStatus, setTextStatus] = useState("");

  async function sendStatus() {
    const obj = {
      text: textStatus,
    };
    try {
      await sendTextStatus(obj);
      alert("Status de texto postado com sucesso");
    } catch (err) {
      console.log("erro");
    }
    setTextStatus("");
  }

  return (
    <div>
      <h2>Adicionar Status de Texto</h2>
      <input
        placeholder="Texto do Status"
        value={textStatus}
        onChange={(e) => setTextStatus(e.target.value)}
      />
      <button onClick={sendStatus}>Adicionar Status de Texto</button>
    </div>
  );
}
