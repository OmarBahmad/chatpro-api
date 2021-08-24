import React, { useState } from "react";
import { sendImageStatus } from "../../../Actions/Status";
import * as S from "./styles";

export default function SendImg() {
  const [caption, setCaption] = useState("");
  const [url, setUrl] = useState("");

  async function sendStatus() {
    const obj = {
      caption,
      url,
    };
    try {
      await sendImageStatus(obj);
      alert("Status de texto postado com sucesso");
    } catch (err) {
      console.log("erro");
    }
    setCaption("");
    setUrl("");
  }
  return (
    <S.Container>
      <S.ContainerHeader>
        <h3>Adicionar Status de Imagem</h3>
      </S.ContainerHeader>
      <S.InputNumber
        placeholder="Texto do Status"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <S.InputMessage
        placeholder="Imagem do Status (URL)"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <S.ButtonSend onClick={sendStatus}>
        Adicionar Status de Imagem
      </S.ButtonSend>
    </S.Container>
  );
}
