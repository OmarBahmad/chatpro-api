import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { deleteMessage } from "../../../../Actions/Message";
import ImportExcel from "../../../../Components/ImportExcel";
import ExportExcelMessageFailed from "../../../../Components/ExportExcel/Message/ExportExcelMessageFailed";

export default function DeleteMultiple() {
  const [amountMessage, setAmountMessage] = useState(0);
  const [count, setCount] = useState(-1);
  const [showExcel, setShowExcel] = useState(false);
  const [items, setItems] = useState([]);
  const [respFalse, setRespFalse] = useState([]);
  const [checkMessage, setCheckMessage] = useState([]);

  async function deleteMsg() {
    const obj = {
      chatJid: items[count].numberJid.toString(),
      messageID: items[count].id.toString(),
    };
    try {
      const resp = await deleteMessage(obj);
      if (resp.status) {
        setCheckMessage((oldArray) => [...oldArray, { sendTrue: true }]);
        toast.success("Mensagem Excluída com sucesso!");
      } else {
        setCheckMessage((oldArray) => [...oldArray, { sendTrue: false }]);
        setRespFalse((index) => [
          ...index,
          {
            chatJid: items[count].numberJid.toString(),
            messageID: items[count].id.toString(),
            number: items[count].number.toString(),
            message: items[count].message.toString(),
          },
        ]);
        toast.error("Mensagem não excluida");
      }
    } catch (err) {
      console.log("erro");
    }
    setCount((prev) => prev + 1);
    setAmountMessage((index) => index - 1);
  }

  useEffect(() => {
    if (count < 0 || count === items.length) return;

    if (items[count].numberJid !== undefined || items[count].id !== undefined) {
      const handler = setInterval(() => {
        deleteMsg();
      }, getRandomArbitrary());
      return () => clearInterval(handler);
    } else {
      alert(
        "Algum campo da linha 1 da planilha importada está com o nome incorreto"
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  useEffect(() => {
    setAmountMessage(items.length);
  }, [items]);

  useEffect(() => {
    if (amountMessage === 0 && items.length !== 0) {
      toast("Disparos Finalizados!!");
      setShowExcel(true);
      setCount(-1);
      setAmountMessage(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amountMessage]);

  function getRandomArbitrary() {
    return (Math.random() * (5000 - 4100) + 4100).toFixed();
  }

  return (
    <div>
      <h3>Excluir Multiplas Mensagens</h3>
      <ImportExcel setItems={setItems} setAmountMessage={setAmountMessage} />
      {console.log(items)}
      <button
        onClick={() => setCount((prev) => prev + 1)}
        disabled={amountMessage === 0}
      >
        Disparar Mensagens
      </button>

      {amountMessage !== 0 && (
        <div>
          <div>Quantidade de Mensagem para serem enviadas: {amountMessage}</div>
        </div>
      )}

      {respFalse.length > 0 && (
        <>
          <ExportExcelMessageFailed
            respFalse={respFalse}
            collum1="chatJid"
            collum2="messageID"
            collum3="number"
            collum4="message"
          />
        </>
      )}
      {console.log(checkMessage)}
    </div>
  );
}
