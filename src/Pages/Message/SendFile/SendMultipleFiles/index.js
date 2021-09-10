import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { sendFile } from "../../../../Actions/Message";
import ImportExcel from "../../../../Components/ImportExcel";
import ExportExcelMessageSucess from "../../../../Components/ExportExcel/ExportExcelMessageSucess";
import ExportExcelMessageFailed from "../../../../Components/ExportExcel/ExportExcelMessageFailed";
import * as S from "./styles";

export function SendMultipleFiles({ setRespAll }) {
  const [items, setItems] = useState([]);
  const [respTrue, setRespTrue] = useState([]);
  const [respFalse, setRespFalse] = useState([]);
  const [count, setCount] = useState(-1);
  const [amountMessage, setAmountMessage] = useState(0);
  const [showExcel, setShowExcel] = useState(false);

  async function sendUrlFile() {
    let verify = "";
    const obj = {
      caption: items[count].caption.toString(),
      number: items[count].number.toString(),
      url: items[count].url.toString(),
    };
    try {
      const resp = await sendFile(obj);
      if (resp.status) {
        verify = "✅";
        setRespTrue((index) => [
          ...index,
          {
            number: items[count].number.toString(),
            caption: resp.requestMenssage.caption.toString(),
            url: resp.requestMenssage.url.toString(),
            messageID: resp.requestMenssage.id.toString(),
            chatJid: resp.requestMenssage.number.toString(),
          },
        ]);
        toast.success("Arquivo Enviado com sucesso!");
      } else {
        verify = "❌";
        setRespFalse((index) => [
          ...index,
          {
            caption: items[count].caption.toString(),
            number: items[count].number.toString(),
            url: items[count].url.toString(),
          },
        ]);
        toast.error("Arquivo Não Enviado");
      }
      setRespAll((index) => [
        ...index,
        {
          index: count + 1,
          caption: items[count].caption.toString(),
          number: items[count].number.toString(),
          checkMsg: verify,
        },
      ]);
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
      items[count].caption !== undefined &&
      items[count].url !== undefined
    ) {
      const handler = setInterval(() => {
        sendUrlFile();
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
    return (Math.random() * (6000 - 5100) + 5100).toFixed();
  }

  useEffect(() => {
    if (amountMessage === 0 && items.length !== 0) {
      toast("Disparos de Arquivos Finalizados!!");
      setShowExcel(true);
      setCount(-1);
      setAmountMessage(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amountMessage]);

  return (
    <S.Container>
      <h4>Disparar Arquivos</h4>
      <S.ImportMessage>
        <ImportExcel setItems={setItems} />
        <S.ButtonFile
          onClick={() => setCount((prev) => prev + 1)}
          disabled={amountMessage === 0 || count !== -1}
        >
          Enviar Arquivos
        </S.ButtonFile>
      </S.ImportMessage>

      {amountMessage !== 0 && (
        <S.CardQuant>
          Quantidade de Arquivos:
          <strong>{amountMessage}</strong>
        </S.CardQuant>
      )}

      {respTrue.length > 0 && showExcel && (
        <>
          <ExportExcelMessageSucess
            respTrue={respTrue}
            collum1="number"
            collum2="caption"
            collum3="url"
            collum4="messageID"
            collum5="chatJid"
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
            collum2="caption"
            collum3="url"
            nameButton="Download da planilha de disparos mal sucedidos"
            nameFile="Disparos mal sucedidos"
          />
        </>
      )}
    </S.Container>
  );
}

/*
      caption: "Tcc Vitor",
      number: "62982530552",
      url: "http://repositorio.unicamp.br/bitstream/REPOSIP/254842/1/Oliveira_MiguelMeirellesde_M.pdf",
*/
