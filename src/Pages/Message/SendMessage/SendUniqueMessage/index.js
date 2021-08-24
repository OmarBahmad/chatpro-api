import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { sendMessage } from "../../../../Actions/Message";
import * as S from "./styles";

export default function SendUniqueMessage() {
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");

  async function sendM() {
    const obj = {
      number: number.toString(),
      message: message.toString(),
    };
    try {
      const resp = await sendMessage(obj);
      if (resp.status) {
        toast.success("Mensagem Enviada com sucesso!");
      } else {
        toast.error("Mensagem Não Enviada!");
      }
    } catch (err) {
      console.log("erro");
    }
  }

  return (
    <S.Container>
      <S.ContainerHeader>
        <h4>Enviar uma mensagem</h4>
      </S.ContainerHeader>
      <S.InputNumber
        placeholder="Numero do telefone"
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
      <S.ButtonSend onClick={sendM} disabled={message === "" || number === ""}>
        Enviar Mensagem
      </S.ButtonSend>
    </S.Container>
  );
}
