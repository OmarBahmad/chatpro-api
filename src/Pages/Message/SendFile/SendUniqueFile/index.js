import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { sendFile } from "../../../../Actions/Message";
import * as S from "./styles";

export function SendUniqueFile() {
  const [caption, setCaption] = useState("");
  const [number, setNumber] = useState("");
  const [url, setURL] = useState("");

  async function sendUrlFile() {
    const obj = {
      caption,
      number,
      url,
    };
    try {
      const resp = await sendFile(obj);
      if (resp.status === true) {
        toast.success("Arquivo Enviado com Sucesso");
        setCaption("");
        setNumber("");
        setURL("");
      } else {
        toast.error("Arquivo Não Enviado");
      }
    } catch (err) {}
  }

  return (
    <S.Container>
      <S.ContainerCard>
        <S.ContainerHeaderCard>
          <h3>Enviar um arquivo</h3>
        </S.ContainerHeaderCard>
        <S.InputNumber
          placeholder="Número de telefone"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <S.InputName
          placeholder="Nome do Arquivo"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        <S.InputURL
          placeholder="URL do Arquivo"
          value={url}
          onChange={(e) => setURL(e.target.value)}
        />
        <S.ButtonSend
          onClick={sendUrlFile}
          disabled={caption === "" || number === "" || url === ""}
        >
          Enviar Arquivo
        </S.ButtonSend>
      </S.ContainerCard>
    </S.Container>
  );
}
