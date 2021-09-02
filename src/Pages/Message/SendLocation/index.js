import React, { useState } from "react";
import Sidebar from "../../../Components/newSidebar/Sidebar";
import SendUniqueLocation from "./SendUniqueLocation";
import SendMultipleLocation from "./SenMultipleLocation";

export default function SendLocation() {
  const [items, setItems] = useState([]);
  const [checkMessage, setCheckMessage] = useState([]);
  const [respTrue, setRespTrue] = useState([]);
  const [respFalse, setRespFalse] = useState([]);

  return (
    <>
      <Sidebar />
      <h2>Enviar Localização</h2>

      <SendUniqueLocation />
      <SendMultipleLocation
        items={items}
        setItems={setItems}
        setCheckMessage={setCheckMessage}
        checkMessage={checkMessage}
        respTrue={respTrue}
        setRespTrue={setRespTrue}
        respFalse={respFalse}
        setRespFalse={setRespFalse}
      />
    </>
  );
}
