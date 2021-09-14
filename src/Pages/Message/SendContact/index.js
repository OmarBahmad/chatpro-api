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
        <h1>Contatos</h1>
        <hr></hr>
        <S.Column1>
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
          {respAll.length > 0 ? (
            <DataTable type="contact" data={respAll} />
          ) : null}
        </S.Column2>
      </S.Container>
    </>
  );
}
