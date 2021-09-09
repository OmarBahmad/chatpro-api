import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { deleteMessage } from "../../../../Actions/Message";
import * as S from "./styles";

import { ValidNumberDelete } from "../../../../hooks/ValidNumberDelete";

export default function DeleteUnique() {
  const [chatJid, setChatJid] = useState("");
  const [messageID, setMessageID] = useState("");

  async function deleteMsg() {
    const isValid = ValidNumberDelete(chatJid);
    if (!isValid)
      return toast.error("Número inválido. Se for celular digitar sem o 9.");

    const obj = {
      chatJid: "55" + chatJid.concat("@s.whatsapp.net"),
      messageID,
    };
    try {
      const resp = await deleteMessage(obj);
      if (resp?.status === 200) {
        toast.success("Mensagem Apagada com Sucesso!");
        setChatJid("");
        setMessageID("");
      } else {
        toast.error("Mensagem Não Apagada!");
      }
    } catch (err) {
      console.log("erro");
    }
  }
  return (
    <S.Container>
      <S.ContainerHeader>
        <h4>Excluir uma Mensagem</h4>
      </S.ContainerHeader>
      <S.ContainerForm>
        <S.InputNumber
          placeholder="Numero do telefone sem o '9'"
          className="input-msg"
          value={chatJid}
          onChange={(e) => setChatJid(e.target.value)}
        />
        <S.InputMessage
          placeholder="Id da Mensagem"
          className="input-msg"
          value={messageID}
          onChange={(e) => setMessageID(e.target.value)}
        />
        <S.ButtonSend
          onClick={deleteMsg}
          disabled={chatJid === "" || messageID === ""}
        >
          Excluir Mensagem{" "}
        </S.ButtonSend>
      </S.ContainerForm>
    </S.Container>
  );
}
