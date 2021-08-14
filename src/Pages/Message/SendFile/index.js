import React, { useState, useEffect } from "react";
import { SendMultipleFiles } from "./SendMultipleFiles";

export default function SendFile() {
  const [items, setItems] = useState([]);
  const [checkMessage, setCheckMessage] = useState([]);
  const [respJson, setRespJson] = useState([]);

  return (
    <div>
      <h2>Enviar Arquivo</h2>
      <SendMultipleFiles
        items={items}
        setItems={setItems}
        setCheckMessage={setCheckMessage}
        checkMessage={checkMessage}
        respJson={respJson}
        setRespJson={setRespJson}
      />
    </div>
  );
}

/*
      caption: "Tcc Vitor",
      number: "62982536654",
      url: "http://repositorio.unicamp.br/bitstream/REPOSIP/254842/1/Oliveira_MiguelMeirellesde_M.pdf",
*/
