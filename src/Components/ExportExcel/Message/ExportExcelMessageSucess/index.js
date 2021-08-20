import React from "react";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export default function ExportExcelMessageSucess({
  respTrue,
  collum1,
  collum2,
  collum3,
  collum4,
  collum5,
  collum6,
  nameButton,
  nameFile,
}) {
  return (
    <div>
      <ExcelFile element={<button>{nameButton}</button>} filename={nameFile}>
        <ExcelSheet data={respTrue} name="Diparos bem sucedidos">
          {collum1 !== null && <ExcelColumn label={collum1} value={collum1} />}
          {collum2 !== null && <ExcelColumn label={collum2} value={collum2} />}
          {collum3 !== null && <ExcelColumn label={collum3} value={collum3} />}
          {collum4 !== null && <ExcelColumn label={collum4} value={collum4} />}
          {collum5 !== null && <ExcelColumn label={collum5} value={collum5} />}
          {collum6 !== null && <ExcelColumn label={collum6} value={collum6} />}
        </ExcelSheet>
      </ExcelFile>
    </div>
  );
}
