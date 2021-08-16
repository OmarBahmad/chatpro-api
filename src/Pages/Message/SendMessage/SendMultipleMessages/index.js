import React, { useState, useEffect } from "react";
import ReactExport from "react-export-excel";

import { sendMessage } from "../../../../Actions/Message";
import ImportExcel from "../../../../Components/ImportExcel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export default function SendMultipleMessages({
  items,
  setItems,
  setCheckMessage,
  respTrue,
  setRespTrue,
  respFalse,
  setRespFalse,
}) {
  const [count, setCount] = useState(-1);

  async function triggerMessages() {
    const obj = {
      number: items[count].number.toString(),
      message: items[count].message.toString(),
    };
    try {
      const resp = await sendMessage(obj);
      if (resp.status) {
        setCheckMessage((oldArray) => [...oldArray, { sendTrue: true }]);
        setRespTrue((index) => [
          ...index,
          {
            number: items[count].number.toString(),
            message: items[count].message.toString(),
            id: resp.messageInfo.Id.toString(),
            numberJid: resp.messageInfo.RemoteJid,
          },
        ]);
      } else {
        setCheckMessage((oldArray) => [...oldArray, { sendTrue: false }]);
        setRespFalse((index) => [
          ...index,
          {
            number: items[count].number.toString(),
            message: items[count].message.toString(),
          },
        ]);
      }
    } catch (err) {
      console.log("erro");
    }
    setCount((prev) => prev + 1);
  }

  useEffect(() => {
    if (count < 0 || count === items.length) return;

    const handler = setInterval(() => {
      triggerMessages();
    }, 4000);
    return () => clearInterval(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <>
      <ImportExcel setItems={setItems} />
      <button onClick={() => setCount((prev) => prev + 1)}>
        Disparar Mensagens
      </button>

      <ExcelFile
        element={<button>Download Disparos com sucesso</button>}
        filename="Diparos bem sucedidos"
      >
        <ExcelSheet data={respTrue} name="Nova">
          <ExcelColumn label="numberJid" value="numberJid" />
          <ExcelColumn label="id" value="id" />
          <ExcelColumn label="number" value="number" />
          <ExcelColumn label="message" value="message" />
        </ExcelSheet>
      </ExcelFile>
      <ExcelFile
        element={<button>Download Disparos não enviados</button>}
        filename="Diparos mal sucedidos"
      >
        <ExcelSheet data={respFalse} name="Nova">
          <ExcelColumn label="number" value="number" />
          <ExcelColumn label="message" value="message" />
        </ExcelSheet>
      </ExcelFile>
    </>
  );
}

/*

Exportado
0: {id: "", number: ""}
1: {id: "23BB540412CF49C671BD", number: "556282530552@s.whatsapp.net"}
2: {id: "85C561706326CD5BA059", number: "556282530552@s.whatsapp.net"}
3: {id: "37843BE6218401FAFE5D", number: "556282530552@s.whatsapp.net"}
4: {id: "416FCF2ED8C7535C0AA8", number: "556282530552@s.whatsapp.net"}
5: {id: "DE43B2292FECBD3BD048", number: "556282530552@s.whatsapp.net"}
6: {id: "FC49334328A20E229414", number: "556282530552@s.whatsapp.net"}
length: 7
[[Prototype]]: Array(0)
*/
