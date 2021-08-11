import React, { useState } from "react";
import { sendMessage } from "../../../Actions/Message";
import ImportExcell from "../../../Components/ImportExcell";

export default function SendMessage() {
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const [items, setItems] = useState([]);

  const arrayExcell = [
    { number: "62985777747", message: "Teste 01" },
    { number: "62985777747", message: "Teste 02" },
    { number: "62985777747", message: "Teste 03" },
    { number: "62985777747", message: "Teste 04" },
  ];

  async function sendM() {
    arrayExcell.forEach((element) => {
      const obj = {
        number: element.number,
        message: element.message,
      };
      try {
        sendMessage(obj);
      } catch (err) {
        console.log("erro");
      }
    });
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

      <ImportExcell setItems={setItems} />
      {items?.map((index) => (
        <p>{index.Nome}</p>
      ))}
    </div>
  );
}

/*
    { number: "62985777747", message: "Teste 01" },

*/
