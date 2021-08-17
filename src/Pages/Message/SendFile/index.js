import React, { useState } from "react";
import { SendMultipleFiles } from "./SendMultipleFiles";
import { SendUniqueFile } from "./SendUniqueFile";

export default function SendFile() {
  const [items, setItems] = useState([]);
  const [checkMessage, setCheckMessage] = useState([]);
  const [respJson, setRespJson] = useState([]);

  return (
    <div>
      <h2>Enviar Arquivo por Excel</h2>
      <SendMultipleFiles
        items={items}
        setItems={setItems}
        setCheckMessage={setCheckMessage}
        checkMessage={checkMessage}
        respJson={respJson}
        setRespJson={setRespJson}
      />
      <SendUniqueFile />
    </div>
  );
}

/*
      caption: "Tcc Vitor",
      number: "62982536654",
      url: "http://repositorio.unicamp.br/bitstream/REPOSIP/254842/1/Oliveira_MiguelMeirellesde_M.pdf",
*/
