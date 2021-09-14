import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { sendMessage } from "../../../../Actions/Message";
import * as S from "./styles";

import { ValidNumber } from "../../../../hooks/ValidNumber";

export default function SendUniqueMessage() {
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");

  async function sendM() {
    const isValid = ValidNumber(number);
    if (!isValid) return toast.error("Número Invalido");

    const obj = {
      number: number.toString(),
      message: message.toString(),
    };
    try {
      const resp = await sendMessage(obj);
      if (resp.status) {
        toast.success("Mensagem Enviada com sucesso!");
        setMessage("");
        setNumber("");
      } else {
        toast.error("Mensagem Não Enviada!");
      }
    } catch (err) {
      console.log("erro");
    }
  }

  return (
    <S.Container>
      <S.ContainerCard>
        <S.ContainerHeaderCard>
          <h3>Enviar uma mensagem</h3>
        </S.ContainerHeaderCard>
        <S.InputNumber
          placeholder="Número de telefone"
          className="input-msg"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <S.InputMessage
          placeholder="Mensagem"
          className="input-msg"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <S.ButtonSend
          onClick={sendM}
          disabled={message === "" || number === ""}
        >
          Enviar Mensagem
        </S.ButtonSend>
      </S.ContainerCard>
    </S.Container>
  );
}
