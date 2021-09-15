import React, { useState } from "react";
import SendUniqueMessage from "./SendUniqueMessage";
import SendMultipleMessages from "./SendMultipleMessages";
import { Sidebar } from "../../../Components/Sidebar";
import DataTable from "../../../Components/DataTable";
import HeaderTab from "../../../Components/HeaderTab";

import * as S from "./Styles";

export default function SendMessage() {
  const [items, setItems] = useState([]);
  const [respTrue, setRespTrue] = useState([]);
  const [respFalse, setRespFalse] = useState([]);
  const [respAll, setRespAll] = useState([]);

  return (
    <>
      <Sidebar />
      <S.Container>
        <HeaderTab />
        <h1>Mensagens</h1>
        <hr></hr>
        <S.Column1>
          <SendUniqueMessage />
          <SendMultipleMessages
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
            <DataTable type="message" data={respAll} />
          ) : null}
        </S.Column2>
      </S.Container>
    </>
  );
}
