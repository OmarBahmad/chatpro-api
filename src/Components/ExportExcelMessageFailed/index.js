import React from "react";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export default function ExportExcelMessageFailed({ respFalse }) {
  return (
    <div>
      <ExcelFile
        element={<button>Download Disparos não enviados</button>}
        filename="Diparos mal sucedidos"
      >
        <ExcelSheet data={respFalse} name="Failed">
          <ExcelColumn label="number" value="number" />
          <ExcelColumn label="message" value="message" />
        </ExcelSheet>
      </ExcelFile>
    </div>
  );
}
