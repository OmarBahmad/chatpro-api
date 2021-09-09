import React, { useState } from "react";
import Sidebar from "../../../Components/newSidebar/Sidebar";
import SendUniqueLocation from "./SendUniqueLocation";
import SendMultipleLocation from "./SenMultipleLocation";
import DataTable from "../../../Components/DataTable";
import * as S from "./styles";

export default function SendLocation() {
  const [items, setItems] = useState([]);
  const [respTrue, setRespTrue] = useState([]);
  const [respFalse, setRespFalse] = useState([]);
  const [respAll, setRespAll] = useState([]);

  return (
    <>
      <Sidebar />
      <S.Container>
        <S.Column1>
          <h2>Enviar Localização</h2>
          <SendUniqueLocation />
          <SendMultipleLocation
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
        <DataTable type="location" data={respAll} />
        </S.Column2>
      </S.Container>
    </>
  );
}
