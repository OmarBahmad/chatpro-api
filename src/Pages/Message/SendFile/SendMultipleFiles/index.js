import React, { useState, useEffect } from "react";
import ReactExport from "react-export-excel";

import { sendFile } from "../../../../Actions/Message";
import ImportExcel from "../../../../Components/ImportExcel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export function SendMultipleFiles({
  items,
  setItems,
  setCheckMessage,
  respJson,
  setRespJson,
}) {
  const [count, setCount] = useState(-1);
  // const [caption, setCaption] = useState("");
  // const [number, setNumber] = useState("");
  // const [url, setURL] = useState("");
  // const [count, setCount] = useState(-1);
  // const [items, setItems] = useState([]);
  // const [respJson, setRespJson] = useState([]);
  // const [checkMessage, setCheckMessage] = useState([]);

  async function sendUrlFile() {
    const obj = {
      caption: items[count].caption.toString(),
      number: items[count].number.toString(),
      url: items[count].url.toString(),
    };
    try {
      const resp = await sendFile(obj);
      if (resp.status === true) {
        setCheckMessage((oldArray) => [...oldArray, { sendTrue: true }]);
        setRespJson((index) => [
          ...index,
          {
            id: resp.requestMenssage.id.toString(),
            number: resp.requestMenssage.number,
          },
        ]);
      } else {
        setCheckMessage((oldArray) => [...oldArray, { sendTrue: false }]);
      }
    } catch (err) {
      console.log("erro");
    }
    setCount((prev) => prev + 1);
  }

  useEffect(() => {
    if (count < 0 || count === items.length) return;

    const handler = setInterval(() => {
      sendUrlFile();
    }, 8000);
    return () => clearInterval(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <>
      <p>file</p>
      <ImportExcel setItems={setItems} />
      <button onClick={() => setCount((prev) => prev + 1)}>
        Disparar Mensagens
      </button>

      <ExcelFile>
        <ExcelSheet data={respJson} name="Nova">
          <ExcelColumn label="id" value="id" />
          <ExcelColumn label="number" value="number" />
        </ExcelSheet>
      </ExcelFile>
    </>
  
  );
}

/*
      caption: "Tcc Vitor",
      number: "62982536654",
      url: "http://repositorio.unicamp.br/bitstream/REPOSIP/254842/1/Oliveira_MiguelMeirellesde_M.pdf",
*/
