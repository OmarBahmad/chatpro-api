import React, { useState, useEffect } from "react";
import { Prompt } from "react-router-dom";
import { toast } from "react-hot-toast";
import { deleteMessage } from "../../../../Actions/Message";
import ImportExcel from "../../../../Components/ImportExcel";
import ExportExcelMessageFailed from "../../../../Components/ExportExcel/ExportExcelMessageFailed";
import * as S from "./styles";

export default function DeleteMultiple({ setRespAll }) {
  const [amountMessage, setAmountMessage] = useState(0);
  const [count, setCount] = useState(-1);
  const [showExcel, setShowExcel] = useState(false);
  const [items, setItems] = useState([]);
  const [respFalse, setRespFalse] = useState([]);
  const [dirty, setDirty] = useState(false);

  async function deleteMsg() {
    let verify = "";
    let isValidID = items[count]?.messageID;
    let isValidChatId = items[count]?.chatJid;


    const obj = {
      chatJid: items[count]?.chatJid?.toString(),
      messageID: items[count]?.messageID?.toString(),
    };

    if (isValidID && isValidChatId) {
      try {
        const resp = await deleteMessage(obj);
        setDirty(true);

        if (resp.status) {
          verify = "✅";
          toast.success("Mensagem Excluída com sucesso!");
        } else {
          verify = "❌";
          setRespFalse((index) => [
            ...index,
            {
              chatJid: items[count]?.chatJid?.toString(),
              messageID: items[count]?.messageID?.toString(),
            },
          ]);
          toast.error("Mensagem não excluida");
        }
      } catch (err) {
        console.log("erro");
      }
    } else {
      verify = "❌";
      setRespFalse((index) => [
        ...index,
        {
          chatJid: items[count]?.chatJid?.toString(),
          messageID: items[count]?.messageID?.toString(),
        },
      ]);
      toast.error("Mensagem não excluida");
    }

    setRespAll((index) => [
      ...index,
      {
        index: count + 1,
        chatJid: items[count]?.chatJid?.toString(),
        messageID: items[count]?.messageID?.toString(),
        checkMsg: verify,
      },
    ]);
    setCount((prev) => prev + 1);
    setAmountMessage((index) => index - 1);
  }

  useEffect(() => {
    if (count < 0 || count === items.length) return;

    const handler = setInterval(() => {
      deleteMsg();
    }, getRandomArbitrary());
    return () => clearInterval(handler);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  useEffect(() => {
    setAmountMessage(items.length);
  }, [items]);

  useEffect(() => {
    if (amountMessage === 0 && items.length !== 0) {
      toast("Exclusões Múltiplas de Mensagens Finalizadas!!");
      setShowExcel(true);
      setCount(-1);
      setAmountMessage(0);
      setDirty(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amountMessage]);

  function getRandomArbitrary() {
    return (Math.random() * (5000 - 4100) + 4100).toFixed();
  }

  return (
    <S.Container>
      <S.ContainerCardAll>
        <S.ContainerCard>
          <S.ContainerHeaderCard>
            <h3>Excluir múltiplas mensagens</h3>
          </S.ContainerHeaderCard>
          <S.ImportMessage>
            <ImportExcel
              setItems={setItems}
              setAmountMessage={setAmountMessage}
            />
            <S.ButtonFile
              onClick={() => setCount((prev) => prev + 1)}
              disabled={amountMessage === 0 || count !== -1}
            >
              Excluir Mensagens
            </S.ButtonFile>
          </S.ImportMessage>
          {amountMessage !== 0 && (
            <S.CardQuant>
              Quantidade de Mensagem à serem excluídas:{" "}
              <strong>{amountMessage}</strong>
            </S.CardQuant>
          )}
        </S.ContainerCard>
      </S.ContainerCardAll>

      <S.ContainerResp>
        {respFalse.length > 0 && showExcel && (
          <>
            <ExportExcelMessageFailed
              respFalse={respFalse}
              collum1="chatJid"
              collum2="messageID"
              collum3="number"
              collum4="message"
              nameButton="Download da planilha de disparos mal sucedidos"
              nameFile="Disparos mal sucedidos"
            />
          </>
        )}
      </S.ContainerResp>
      <Prompt
        when={dirty}
        message={`Se você sair da página, os disparos não serão efetuados e todas as informações serão perdidas.`}
      />
    </S.Container>
  );
}
