import React, { useState, useEffect } from "react";
import { sendMessage } from "../../../../Actions/Message";
import ImportExcel from "../../../../Components/ImportExcel";
import ExportExcelMessageSucess from "../../../../Components/ExportExcelMessageSucess";
import ExportExcelMessageFailed from "../../../../Components/ExportExcelMessageFailed";

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

      <ExportExcelMessageSucess respTrue={respTrue} />
      <ExportExcelMessageFailed respFalse={respFalse} />
    </>
  );
}
