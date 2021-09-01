import React, { useState } from "react";
import SendUniqueContact from "./SendUniqueContact";
import SendMultipleContact from "./SendMultipleContact";

export default function SendMessage() {
  const [items, setItems] = useState([]);
  const [checkMessage, setCheckMessage] = useState([]);
  const [respTrue, setRespTrue] = useState([]);
  const [respFalse, setRespFalse] = useState([]);

  return (
    <div>
      <h2>Enviar contatos</h2>
      
      <SendUniqueContact />
      <SendMultipleContact
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