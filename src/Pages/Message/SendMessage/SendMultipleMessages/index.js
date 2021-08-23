import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { sendMessage } from "../../../../Actions/Message";
import ImportExcel from "../../../../Components/ImportExcel";
import ExportExcelMessageSucess from "../../../../Components/ExportExcel/ExportExcelMessageSucess";
import ExportExcelMessageFailed from "../../../../Components/ExportExcel/ExportExcelMessageFailed";
import * as S from "./styles";

export default function SendMultipleMessages({
  items,
  setItems,
  setCheckMessage,
  checkMessage,
  respTrue,
  setRespTrue,
  respFalse,
  setRespFalse,
}) {
  const [count, setCount] = useState(-1);
  const [amountMessage, setAmountMessage] = useState(0);
  const [showExcel, setShowExcel] = useState(false);

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
        toast.success("Mensagem Enviada com sucesso!");
      } else {
        setCheckMessage((oldArray) => [...oldArray, { sendTrue: false }]);
        setRespFalse((index) => [
          ...index,
          {
            number: items[count].number.toString(),
            message: items[count].message.toString(),
          },
        ]);
        toast.error("Mensagem não enviada");
      }
    } catch (err) {
      console.log("erro");
    }
    setCount((prev) => prev + 1);
    setAmountMessage((index) => index - 1);
  }

  useEffect(() => {
    if (count < 0 || count === items.length) return;

    if (
      items[count].number !== undefined &&
      items[count].message !== undefined
    ) {
      const handler = setInterval(() => {
        triggerMessages();
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

  function getRandomArbitrary() {
    return (Math.random() * (3500 - 2600) + 2600).toFixed();
  }

  useEffect(() => {
    if (amountMessage === 0 && items.length !== 0) {
      toast("Disparos de Mensagens Finalizados!!");
      setShowExcel(true);
      setCount(-1);
      setAmountMessage(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amountMessage]);

  return (
    <S.Container>
      <h3>Disparar Mensagens</h3>
      <S.ImportMessage>
        <ImportExcel setItems={setItems} setAmountMessage={setAmountMessage} />
        <S.ButtonFile
          onClick={() => setCount((prev) => prev + 1)}
          disabled={amountMessage === 0}
        >
          Disparar Mensagens
        </S.ButtonFile>
        {amountMessage !== 0 && (
          <S.CardQuant>
            Quantidade de Mensagens: <strong>{amountMessage}</strong>
          </S.CardQuant>
        )}
      </S.ImportMessage>

      {respTrue.length > 0 && showExcel && (
        <>
          <ExportExcelMessageSucess
            respTrue={respTrue}
            collum1="number"
            collum2="message"
            collum3="id"
            collum4="numberJid"
            nameButton="Download da planilha de disparos bem sucedidos"
            nameFile="Disparos bem sucedidos"
          />
        </>
      )}
      {respFalse.length > 0 && showExcel && (
        <>
          <ExportExcelMessageFailed
            respFalse={respFalse}
            collum1="number"
            collum2="message"
            nameButton="Download da planilha de disparos mal sucedidos"
            nameFile="Disparos mal sucedidos"
          />
        </>
      )}
      {console.log(checkMessage)}
    </S.Container>
  );
}
