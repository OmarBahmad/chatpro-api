import React, { useState } from "react";
import { sendTextStatus } from "../../../Actions/Status";
import * as S from "./styles";

export default function SendText() {
  const [textStatus, setTextStatus] = useState("");

  async function sendStatus() {
    const obj = {
      text: textStatus,
    };
    try {
      await sendTextStatus(obj);
      alert("Status de texto postado com sucesso");
    } catch (err) {
      console.log("erro");
    }
    setTextStatus("");
  }

  return (
    <S.Container>
      <h2>Status</h2>
      <S.ContainerHeader>
        <h3>Adicionar Status de Texto</h3>
      </S.ContainerHeader>
      <S.InputNumber
        placeholder="Texto"
        value={textStatus}
        onChange={(e) => setTextStatus(e.target.value)}
      />
      <S.ButtonSend onClick={sendStatus}>
        Adicionar Status de Texto
      </S.ButtonSend>
    </S.Container>
  );
}
