import React, { useState } from "react";
import Sidebar from "../../../Components/newSidebar/Sidebar";
import DataTable from "../../../Components/DataTable";
import * as S from "./Styles";
import SendUniqueContact from "./SendUniqueContact";
import SendMultipleContact from "./SendMultipleContact";

export default function SendMessage() {
  const [items, setItems] = useState([]);
  const [respTrue, setRespTrue] = useState([]);
  const [respFalse, setRespFalse] = useState([]);
  const [respAll, setRespAll] = useState([]);

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
            respTrue={respTrue}
            setRespTrue={setRespTrue}
            respFalse={respFalse}
            setRespFalse={setRespFalse}
            setRespAll={setRespAll}
          />
        </S.Column1>
        <S.Column2>
        <DataTable type="contact" data={respAll} />
        </S.Column2>
      </S.Container>
    </>
  );
}
