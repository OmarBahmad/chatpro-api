import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { sendLocation } from "../../../../Actions/Message";
import ImportExcel from "../../../../Components/ImportExcel";
import ExportExcelMessageSucess from "../../../../Components/ExportExcel/ExportExcelMessageSucess";
import ExportExcelMessageFailed from "../../../../Components/ExportExcel/ExportExcelMessageFailed";
import * as S from "./styles";

export default function SendMultipleLocation({
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

  async function triggerLocations() {
    let verify = "";
    const obj = {
      address: items[count].address.toString(),
      lat: Number(items[count].lat),
      lng: Number(items[count].lng),
      name: items[count].name.toString(),
      number: items[count].number.toString(),
    };
    try {
      const resp = await sendLocation(obj);
      if (resp.status) {
        verify = "✅";
        setRespTrue((index) => [
          ...index,
          {
            address: items[count].address.toString(),
            name: items[count].name.toString(),
            number: items[count].number.toString(),
            messageID: resp.messageInfo.Id,
            chatJid: resp.messageInfo.RemoteJid,
          },
        ]);
        toast.success("Localização enviada com sucesso");
      } else {
        verify = "❌";

        setRespFalse((index) => [
          ...index,
          {
            address: items[count].address.toString(),
            lat: Number(items[count].lat),
            lng: Number(items[count].lng),
            name: items[count].name.toString(),
            number: items[count].number.toString(),
          },
        ]);
        toast.error("Localização não enviada");
      }

      setRespAll((index) => [
        ...index,
        {
          index: count + 1,
          address: items[count].address.toString(),
          name: items[count].name.toString(),
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
      items[count].address !== undefined
    ) {
      const handler = setInterval(() => {
        triggerLocations();
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
    return (Math.random() * (4500 - 3600) + 3600).toFixed();
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
      <h4>Disparo de Localizações</h4>
      <S.ImportMessage>
        <ImportExcel setItems={setItems} setAmountMessage={setAmountMessage} />
        <S.ButtonFile
          onClick={() => setCount((prev) => prev + 1)}
          disabled={amountMessage === 0 || count !== -1}
        >
          Disparar Localizações
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
            collum1="address"
            collum2="name"
            collum3="number"
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
            collum1="address"
            collum2="lat"
            collum3="lng"
            collum4="name"
            collum5="number"
            nameButton="Download da planilha de disparos mal sucedidos"
            nameFile="Disparos mal sucedidos"
          />
        </>
      )}
    </S.Container>
  );
}
