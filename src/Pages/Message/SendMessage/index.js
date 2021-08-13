import React, { useState, useEffect } from "react";
import { sendMessage } from "../../../Actions/Message";
import ImportExcell from "../../../Components/ImportExcell";

export default function SendMessage() {
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const [items, setItems] = useState([]);
  const [checkMessage, setCheckMessage] = useState([]);
  const [count, setCount] = useState(-1);

  async function sendM() {
    const obj = {
      number: items[count].numero.toString(),
      message: items[count].mensagem,
    };
    try {
      const resp = await sendMessage(obj);
      if (resp.status === true) {
        setCheckMessage((oldArray) => [...oldArray, { sendTrue: true }]);
      } else {
        setCheckMessage((oldArray) => [...oldArray, { sendTrue: false }]);
      }
    } catch (err) {
      console.log("erro");
    }

    setCount((prev) => prev + 1);
  }

  useEffect(() => {
    if (count < 0 || count === items.length) return;

    const handler = setInterval(() => {
      sendM();
    }, 4000);
    return () => clearInterval(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

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
      <button onClick={() => setCount((prev) => prev + 1)}>
        Enviar Mensagem
      </button>

      <ImportExcell setItems={setItems} />
      {items?.map((index) => (
        <div key={index.mensagem}>
          <p>
            Número: {index.numero} - Mensagem: {index.mensagem}
          </p>
        </div>
      ))}
      {checkMessage?.map((index) => (
        <div key={index.sendTrue}>
          <p>Mensagem Enviada: {index.sendTrue === true ? "Sim" : "Não"}</p>
        </div>
      ))}

      {console.log(checkMessage)}
    </div>
  );
}

/*
    { number: "62985777747", message: "Teste 01" },
      const arrayExcell = [
    { number: "62981818608", message: "Teste Vitor" },
    { number: "62981818608", message: "Teste Andre" },
    { number: "62981818608", message: "Teste Omar" },
    { number: "62981818608", message: "Teste Caio" },
  ];

*/
