import React from "react";
import Sidebar from "../../../Components/newSidebar/Sidebar";

import DeleteUnique from "./DeleteUnique";
import DeleteMultiple from "./DeleteMultiple";

export default function DeleteMessage() {
  return (
    <>
      <Sidebar />
      <h2>Excluir Mensagens</h2>
      <DeleteUnique />
      <DeleteMultiple />
    </>
  );
}

/*
      chatJid: "556282530552@s.whatsapp.net", //sem o 9
      messageID: "2B632CC4CCECA2E3FBA3",
*/
