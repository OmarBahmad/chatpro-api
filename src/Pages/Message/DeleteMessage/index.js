import React, { useState } from "react";
import Sidebar from "../../../Components/newSidebar/Sidebar";
import DeleteUnique from "./DeleteUnique";
import DeleteMultiple from "./DeleteMultiple";
import DataTable from "../../../Components/DataTable";
import * as S from "./styles";

export default function DeleteMessage() {
  const [respAll, setRespAll] = useState([]);
  return (
    <>
      <Sidebar />
      <S.Container>
        <S.Column1>
          <h2>Excluir Mensagens</h2>
          <DeleteUnique />
          <DeleteMultiple setRespAll={setRespAll} />
        </S.Column1>
        <S.Column2>
          {respAll.length > 0 ? (
            <DataTable type="delete" data={respAll} />
          ) : null}
        </S.Column2>
      </S.Container>
    </>
  );
}
