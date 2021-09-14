import React, { useState } from "react";
import Sidebar from "../../../Components/newSidebar/Sidebar";
import DataTable from "../../../Components/DataTable";
import HeaderTab from "../../../Components/HeaderTab";

import * as S from "./Styles";

import { SendMultipleFiles } from "./SendMultipleFiles";
import { SendUniqueFile } from "./SendUniqueFile";

export default function SendFile() {
  const [respAll, setRespAll] = useState([]);

  return (
    <>
      <Sidebar />
      <S.Container>
        <HeaderTab />
        <h1>Arquivos</h1>
        <hr></hr>
        <S.Column1>
          <SendUniqueFile />
          <SendMultipleFiles setRespAll={setRespAll} />
        </S.Column1>
        <S.Column2>
          {respAll.length > 0 ? <DataTable type="file" data={respAll} /> : null}
        </S.Column2>
      </S.Container>
    </>
  );
}
