import React from "react";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export default function ExportExcelContacts({ data }) {
  return (
    <div>
      <ExcelFile
        element={<button>BAIXAR Contatos do celular</button>}
        filename="Contatos do celular"
      >
        <ExcelSheet data={data} name="Contato">
          <ExcelColumn label="Jid" value="Jid" />
          <ExcelColumn label="Name" value="Name" />
        </ExcelSheet>
      </ExcelFile>
    </div>
  );
}
