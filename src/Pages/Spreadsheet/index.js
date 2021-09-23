import React from "react";
import { Sidebar } from "../../Components/Sidebar";
import AllSpreadSheets from "./AllSpreadSheets";
import * as S from "./styles";

export default function Spreadsheet() {
  return (
    <>
      <Sidebar />
      <S.Container>
        <h1>Planilhas</h1>
        <hr />
        <S.ContainerBody>
          <S.ContainerBodyHeader>
            <h3>Download</h3>
          </S.ContainerBodyHeader>
          <AllSpreadSheets />
        </S.ContainerBody>
      </S.Container>
    </>
  );
}
