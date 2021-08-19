import React, { useState } from "react";
import { SendMultipleFiles } from "./SendMultipleFiles";
import { SendUniqueFile } from "./SendUniqueFile";

export default function SendFile() {

  return (
    <div>
      <h2>Enviar Arquivos</h2>
      <SendUniqueFile />
      <SendMultipleFiles
      />
    </div>
  );
}

/*
      caption: "Tcc Vitor",
      number: "62982536654",
      url: "http://repositorio.unicamp.br/bitstream/REPOSIP/254842/1/Oliveira_MiguelMeirellesde_M.pdf",
*/
