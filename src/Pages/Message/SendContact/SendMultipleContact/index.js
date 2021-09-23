import React, { useState, useEffect } from "react";
import { Prompt } from "react-router-dom";
import { sendContact } from "../../../../Actions/Message";
import { toast } from "react-hot-toast";
import ImportExcel from "../../../../Components/ImportExcel";
import ExportExcelMessageSucess from "../../../../Components/ExportExcel/ExportExcelMessageSucess";
import ExportExcelMessageFailed from "../../../../Components/ExportExcel/ExportExcelMessageFailed";
import { ValidNumber } from "../../../../hooks/ValidNumber";
import * as S from "./styles";

export default function SendMultipleContact({
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
  const [dirty, setDirty] = useState(false);

  async function sendCTT() {
    let verify = "";
    let isValid = ValidNumber(items[count]?.number?.toString());
    let isValidContactNumber = ValidNumber(
      items[count]?.contact_number?.toString()
    );
    let isValidName = items[count]?.contact_name;

    const obj = {
      contact_name: items[count]?.contact_name?.toString(),
      contact_number: items[count]?.contact_number?.toString(),
      number: items[count]?.number?.toString(),
    };
    if (isValid && isValidContactNumber && isValidName) {
      try {
        const resp = await sendContact(obj);
        setDirty(true);
        if (resp?.Status === 0) {
          verify = "✅";

          setRespTrue((index) => [
            ...index,
            {
              number: items[count].number.toString(),
              contact_name: items[count].contact_name.toString(),
              contact_number: items[count].contact_number.toString(),
              messageID: resp.Id.toString(),
              chatJid: resp.RemoteJid.toString(),
            },
          ]);
          toast.success("Contato Enviado com Sucesso!");
        } else {
          verify = "❌";

          setRespFalse((index) => [
            ...index,
            {
              contact_name: items[count]?.contact_name?.toString(),
              contact_number: items[count]?.contact_number?.toString(),
              number: items[count]?.number?.toString(),
            },
          ]);
          toast.error("Contato não enviado");
        }
      } catch (err) {
        console.log("erro");
      }
    } else {
      verify = "❌";

      setRespFalse((index) => [
        ...index,
        {
          contact_name: items[count]?.contact_name?.toString(),
          contact_number: items[count]?.contact_number?.toString(),
          number: items[count]?.number?.toString(),
        },
      ]);
      toast.error("Contato não enviado");
    }

    setRespAll((index) => [
      ...index,
      {
        index: count + 1,
        number: items[count]?.number?.toString(),
        contact_number: items[count]?.contact_number?.toString(),
        contact_name: items[count]?.contact_name?.toString(),
        checkMsg: verify,
      },
    ]);

    setCount((prev) => prev + 1);
    setAmountMessage((index) => index - 1);
  }

  useEffect(() => {
    if (count < 0 || count === items.length) return;

    const handler = setInterval(() => {
      sendCTT();
    }, getRandomArbitrary());
    return () => clearInterval(handler);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  useEffect(() => {
    setAmountMessage(items.length);
  }, [items]);

  function getRandomArbitrary() {
    return (Math.random() * (4000 - 3100) + 3100).toFixed();
  }

  useEffect(() => {
    if (amountMessage === 0 && items.length !== 0) {
      toast("Disparos de Contatos Finalizados!!");
      setShowExcel(true);
      setCount(-1);
      setAmountMessage(0);
      setDirty(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amountMessage]);

  return (
    <S.Container>
      <S.ContainerCardAll>
        <S.ContainerCard>
          <S.ContainerHeaderCard>
            <h3>Disparo de contatos</h3>
          </S.ContainerHeaderCard>
          <S.ImportMessage>
            <ImportExcel setItems={setItems} />
            <S.ButtonFile
              onClick={() => setCount((prev) => prev + 1)}
              disabled={amountMessage === 0 || count !== -1}
            >
              Disparar Contatos
            </S.ButtonFile>
          </S.ImportMessage>

          {amountMessage !== 0 && (
            <S.CardQuant>
              Quantidade de Contatos:
              <strong> {amountMessage}</strong>
            </S.CardQuant>
          )}
        </S.ContainerCard>
      </S.ContainerCardAll>

      <S.ContainerResp>
        {respTrue.length > 0 && showExcel && (
          <>
            <ExportExcelMessageSucess
              respTrue={respTrue}
              collum1="number"
              collum2="contact_name"
              collum3="contact_number"
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
              collum2="contact_name"
              collum3="contact_number"
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
