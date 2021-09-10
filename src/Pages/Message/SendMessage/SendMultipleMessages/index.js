import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { sendMessage } from "../../../../Actions/Message";
import ImportExcel from "../../../../Components/ImportExcel";
import ExportExcelMessageSucess from "../../../../Components/ExportExcel/ExportExcelMessageSucess";
import ExportExcelMessageFailed from "../../../../Components/ExportExcel/ExportExcelMessageFailed";
import { ValidNumber } from "../../../../hooks/ValidNumber";
import * as S from "./styles";

export default function SendMultipleMessages({
  items,
  setItems,
  respTrue,
  setRespTrue,
  respFalse,
  setRespFalse,
  setRespAll,
}) {
  const [count, setCount] = useState(-1);
  const [amountMessage, setAmountMessage] = useState(0);
  const [showExcel, setShowExcel] = useState(false);

  async function triggerMessages() {
    let verify = "";
    let isValid = ValidNumber(items[count].number.toString());

    const obj = {
      number: items[count].number.toString(),
      message: items[count].message.toString(),
    };

    if (isValid) {
      try {
        const resp = await sendMessage(obj);
        if (resp.status) {
          verify = "✅";
          setRespTrue((index) => [
            ...index,
            {
              number: items[count].number.toString(),
              message: items[count].message.toString(),
              messageID: resp.messageInfo.Id.toString(),
              chatJid: resp.messageInfo.RemoteJid,
            },
          ]);
          toast.success("Mensagem Enviada com sucesso!");
        } else {
          verify = "❌";
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
    } else {
      verify = "❌";
      setRespFalse((index) => [
        ...index,
        {
          number: items[count].number.toString(),
          message: items[count].message.toString(),
        },
      ]);
      toast.error("Mensagem não enviada");
    }

    setRespAll((index) => [
      ...index,
      {
        index: count + 1,
        number: items[count].number.toString(),
        message: items[count].message.toString(),
        checkMsg: verify,
      },
    ]);

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
      <h4>Disparo de Mensagens</h4>
      <S.ImportMessage>
        <ImportExcel setItems={setItems} setAmountMessage={setAmountMessage} />
        <S.ButtonFile
          onClick={() => setCount((prev) => prev + 1)}
          disabled={amountMessage === 0 || count !== -1}
        >
          Disparar Mensagens
        </S.ButtonFile>
      </S.ImportMessage>
      {amountMessage !== 0 && (
        <S.CardQuant>
          Quantidade de Mensagens: <strong>{amountMessage}</strong>
        </S.CardQuant>
      )}

      {respTrue.length > 0 && showExcel && (
        <>
          <ExportExcelMessageSucess
            respTrue={respTrue}
            collum1="number"
            collum2="message"
            collum3="messageID"
            collum4="chatJid"
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
    </S.Container>
  );
}
