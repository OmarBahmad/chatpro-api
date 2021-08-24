import React from "react";

import DeleteUnique from "./DeleteUnique";
import DeleteMultiple from "./DeleteMultiple";

export default function DeleteMessage() {
  return (
    <div>
      <h2>Excluir Mensagens</h2>
      <DeleteUnique />
      <DeleteMultiple />
    </div>
  );
}

/*
      chatJid: "556282530552@s.whatsapp.net", //sem o 9
      messageID: "2B632CC4CCECA2E3FBA3",
*/
