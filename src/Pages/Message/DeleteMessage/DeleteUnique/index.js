import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { deleteMessage } from "../../../../Actions/Message";
import * as S from "./styles";

export default function DeleteUnique() {
  const [chatJid, setChatJid] = useState("");
  const [messageID, setMessageID] = useState("");

  async function deleteMsg() {
    const obj = {
      chatJid: "55" + chatJid.concat("@s.whatsapp.net"),
      messageID,
    };
    try {
      const resp = await deleteMessage(obj);
      if (resp) {
        toast.success("Mensagem Enviada com sucesso!");
      } else {
        toast.error("Mensagem Não Apagada!");
      }
    } catch (err) {
      console.log("erro");
    }
    setChatJid("");
    setMessageID("");
  }
  return (
    <S.Container>
      <S.ContainerHeader>
        <h4>Excluir uma Mensagem</h4>
      </S.ContainerHeader>
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
    </S.Container>
  );
}
