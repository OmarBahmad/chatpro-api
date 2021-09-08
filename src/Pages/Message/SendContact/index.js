import React, { useState } from "react";
import Sidebar from "../../../Components/newSidebar/Sidebar";
import DataTable from "../../../Components/DataTable";
import * as S from "./Styles";

import SendUniqueContact from "./SendUniqueContact";
import SendMultipleContact from "./SendMultipleContact";

export default function SendMessage() {
  const [items, setItems] = useState([]);
  const [checkMessage, setCheckMessage] = useState([]);
  const [respTrue, setRespTrue] = useState([]);
  const [respFalse, setRespFalse] = useState([]);

  return (
    <>
      <Sidebar />
      <S.Container>
        <S.Column1>
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
        </S.Column1>
        <S.Column2>sd</S.Column2>
      </S.Container>
    </>
  );
}
