import React, { useState } from "react";
import { sendImageStatus } from "../../../Actions/Status";

export default function SendImg() {
  const [caption, setCaption] = useState("");
  const [url, setUrl] = useState("");

  async function sendStatus() {
    const obj = {
      caption,
      url,
    };
    try {
      await sendImageStatus(obj);
      alert("Status de texto postado com sucesso");
    } catch (err) {
      console.log("erro");
    }
    setCaption("");
    setUrl("");
  }
  return (
    <div>
      <h2>Adicionar Status de Imagem</h2>
      <input
        placeholder="Texto do Status"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <input
        placeholder="Imagem do Status"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={sendStatus}>Adicionar Status de Imagem</button>
    </div>
  );
}
