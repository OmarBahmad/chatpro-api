import React, { useState } from "react";
import { sendFile } from "../../../Actions/Message";

export default function SendFile() {
  const [caption, setCaption] = useState("");
  const [number, setNumber] = useState("");
  const [url, setURL] = useState("");

  async function sendUrlFile() {
    const obj = {
      caption,
      number,
      url,
    };
    try {
      await sendFile(obj);
      alert("Mensagem enviada com sucesso.");
    } catch (err) {
      console.log("erro");
    }
    setCaption("");
    setNumber("");
    setURL("");
  }
  return (
    <div>
      <h2>Enviar Arquivo</h2>
      <input
        placeholder="Nome do Arquivo"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <input
        placeholder="Número"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <input
        placeholder="URL"
        value={url}
        onChange={(e) => setURL(e.target.value)}
      />
      <button onClick={sendUrlFile}>Enviar Arquivo</button>
    </div>
  );
}

/*
      caption: "Tcc Vitor",
      number: "62982536654",
      url: "http://repositorio.unicamp.br/bitstream/REPOSIP/254842/1/Oliveira_MiguelMeirellesde_M.pdf",
*/
