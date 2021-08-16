import React from "react";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export default function ExportExcelMessageSucess({ respTrue }) {
  return (
    <div>
      <ExcelFile
        element={<button>Download da planilha de disparos com sucesso</button>}
        filename="Diparos bem sucedidos"
      >
        <ExcelSheet data={respTrue} name="Sucess">
          <ExcelColumn label="numberJid" value="numberJid" />
          <ExcelColumn label="id" value="id" />
          <ExcelColumn label="number" value="number" />
          <ExcelColumn label="message" value="message" />
        </ExcelSheet>
      </ExcelFile>
    </div>
  );
}
