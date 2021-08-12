import React, { useState } from "react";
import { sendMessage } from "../../../Actions/Message";
import ImportExcell from "../../../Components/ImportExcell";

export default function SendMessage() {
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const [items, setItems] = useState([]);

  const arrayExcell = [
    { number: "62982530552", message: "Teste Vitor" },
    { number: "62985577747", message: "Teste Andre" },
    { number: "62996422859", message: "Teste Omar" },
  ];

  async function sendM() {
    items.forEach((element) => {
      const obj = {
        number: element.numero.toString(),
        message: element.mensagem,
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
        <div key={index.numero}>
          <p>
            Número: {index.numero} - Mensagem: {index.mensagem}
          </p>
        </div>
      ))}
      {console.log(items)}
    </div>
  );
}

/*
    { number: "62985777747", message: "Teste 01" },

*/
