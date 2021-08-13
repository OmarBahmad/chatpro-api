import React, { useState, useEffect } from "react";
import { sendFile } from "../../../Actions/Message";
import ImportExcell from "../../../Components/ImportExcell";

export default function SendFile() {
  const [caption, setCaption] = useState("");
  const [number, setNumber] = useState("");
  const [url, setURL] = useState("");
  const [count, setCount] = useState(-1);
  const [items, setItems] = useState([]);
  const [checkMessage, setCheckMessage] = useState([]);

  async function sendUrlFile() {
    const obj = {
      caption: items[count].nome.toString(),
      number: items[count].numero.toString(),
      url: items[count].url.toString(),
    };
    try {
      const resp = await sendFile(obj);
      if (resp.status === true) {
        setCheckMessage((oldArray) => [...oldArray, { sendTrue: true }]);
      } else {
        setCheckMessage((oldArray) => [...oldArray, { sendTrue: false }]);
      }
    } catch (err) {
      console.log("erro");
    }
    setCaption("");
    setNumber("");
    setURL("");
    setCount((prev) => prev + 1);
  }

  useEffect(() => {
    if (count < 0 || count === items.length) return;

    const handler = setInterval(() => {
      sendUrlFile();
    }, 4000);
    return () => clearInterval(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

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
      <input type="file" value={url} onChange={(e) => setURL(e.target.value)} />
      <ImportExcell setItems={setItems} />
      <button onClick={() => setCount((prev) => prev + 1)}>
        Enviar Arquivo
      </button>
      {console.log(items)}

      {checkMessage?.map((index) => (
        <div key={index.sendTrue}>
          <p>Mensagem Enviada: {index.sendTrue === true ? "Sim" : "Não"}</p>
        </div>
      ))}
    </div>
  );
}

/*
      caption: "Tcc Vitor",
      number: "62982536654",
      url: "http://repositorio.unicamp.br/bitstream/REPOSIP/254842/1/Oliveira_MiguelMeirellesde_M.pdf",
*/
