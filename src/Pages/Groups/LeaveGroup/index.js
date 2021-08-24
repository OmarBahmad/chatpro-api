import React, { useState } from "react";
import { leaveGroup } from "../../../Actions/Groups";
import { getChat } from "../../../Actions/Chat";
import * as S from "./styles";

export default function LeaveGroup() {
  const [jid, setJid] = useState("");

  const [group, setGroup] = useState([]);

  async function postB() {
    try {
      const resp = await getChat();
      const json = await resp?.filter((group) => group.Jid.includes("@g.us"));

      setGroup(json);
      console.log(resp);
    } catch (err) {
      console.log(err);
    }
  }

  async function leaveG() {
    const obj = {
      jid: jid,
    };

    try {
      await leaveGroup(obj);
      alert("Você saiu do grupo!");
    } catch {
      console.log("Erro ao sair do grupo!");
    }
    setJid("");
  }

  return (
    <S.Container>
      <h2>Pesquisar Grupos</h2>
      <S.ButtonCreate onClick={postB}> Pesquisar grupos </S.ButtonCreate>
      <br />
      {group?.map((index) => (
        <>
          <p>
            Nome do Grupo: {index.Name} <span> Id: {index.Jid}</span>{" "}
          </p>
        </>
      ))}
      <S.ContainerLeave>
        <h2>Sair de um grupo</h2>
        <S.InputNumber
          placeholder="JID do Grupo"
          className="input-msg"
          value={jid}
          onChange={(e) => setJid(e.target.value)}
        />
        <S.ButtonSend onClick={leaveG}> Sair do Grupo </S.ButtonSend>
      </S.ContainerLeave>
    </S.Container>
  );
}
