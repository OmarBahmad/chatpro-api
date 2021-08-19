import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { sendFile } from "../../../../Actions/Message";
import ImportExcel from "../../../../Components/ImportExcel";
import ExportExcelMessageSucess from "../../../../Components/ExportExcel/Message/ExportExcelMessageSucess";
import ExportExcelMessageFailed from "../../../../Components/ExportExcel/Message/ExportExcelMessageFailed";

export function SendMultipleFiles() {
  const [items, setItems] = useState([]);
  const [checkMessage, setCheckMessage] = useState([]);
  const [respTrue, setRespTrue] = useState([]);
  const [respFalse, setRespFalse] = useState([]);
  const [count, setCount] = useState(-1);
  const [amountMessage, setAmountMessage] = useState(0);
  const [showExcel, setShowExcel] = useState(false);

  async function sendUrlFile() {
    const obj = {
      caption: items[count].caption.toString(),
      number: items[count].number.toString(),
      url: items[count].url.toString(),
    };
    try {
      const resp = await sendFile(obj);
      if (resp.status) {
        setCheckMessage((oldArray) => [...oldArray, { sendTrue: true }]);
        setRespTrue((index) => [
          ...index,
          {
            number: items[count].number.toString(),
            caption: resp.requestMenssage.caption.toString(),
            url: resp.requestMenssage.url.toString(),
            id: resp.requestMenssage.id.toString(),
            numberJid: resp.requestMenssage.number.toString(),
          },
        ]);
        toast.success("Arquivo Enviado com sucesso!");
      } else {
        setCheckMessage((oldArray) => [...oldArray, { sendTrue: false }]);
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
    return (Math.random() * (7000 - 6100) + 6100).toFixed();
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
    <>
      <p>file</p>
      <ImportExcel setItems={setItems} />
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

      {respTrue.length > 0 && showExcel && (
        <>
          <ExportExcelMessageSucess
            respTrue={respTrue}
            collum1="number"
            collum2="caption"
            collum3="url"
            collum4="id"
            collum5="numberJid"
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
          />
        </>
      )}
      {console.log(checkMessage)}
      {console.log(respTrue)}
      {console.log(respFalse)}
    </>
  );
}

/*
      caption: "Tcc Vitor",
      number: "62982530552",
      url: "http://repositorio.unicamp.br/bitstream/REPOSIP/254842/1/Oliveira_MiguelMeirellesde_M.pdf",
*/
