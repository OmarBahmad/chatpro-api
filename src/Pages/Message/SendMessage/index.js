import React, { useState } from "react";
import SendUniqueMessage from "./SendUniqueMessage";
import SendMultipleMessages from "./SendMultipleMessages";

export default function SendMessage() {
  const [items, setItems] = useState([]);
  const [checkMessage, setCheckMessage] = useState([]);
  const [respJson, setRespJson] = useState([]);

  return (
    <div>
      <h2>Enviar Mensagem</h2>
      <SendUniqueMessage />
      <SendMultipleMessages
        items={items}
        setItems={setItems}
        setCheckMessage={setCheckMessage}
        checkMessage={checkMessage}
        respJson={respJson}
        setRespJson={setRespJson}
      />
      {console.log(items)}
      {console.log(respJson)}
    </div>
  );
}
/*

FAZER UMA TABLE PRA MOSTRAR OS DADOS

{items?.map((index) => (
        <div key={index.mensagem}>
          <p>
            Número: {index.numero} - Mensagem: {index.mensagem}
          </p>
        </div>
      ))}
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
*/
