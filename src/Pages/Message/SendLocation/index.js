import React, { useState } from "react";
import SendUniqueLocation from "./SendUniqueLocation";
import SendMultipleLocation from "./SenMultipleLocation";

export default function SendLocation() {
  const [items, setItems] = useState([]);
  const [checkMessage, setCheckMessage] = useState([]);
  const [respTrue, setRespTrue] = useState([]);
  const [respFalse, setRespFalse] = useState([]);

  return (
    <div>
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
    </div>
  );
}