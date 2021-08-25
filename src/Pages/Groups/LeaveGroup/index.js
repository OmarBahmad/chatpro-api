import React, { useState } from "react";
import { toast } from "react-hot-toast";
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
      const resp = await leaveGroup(obj);
      if (resp.status === 200 && resp?.code !== 400) {
        toast.success("Você saiu do Grupo!");
        setJid("");
      } else {
        toast.error("Não foi possível criar o grupo!");
      }
    } catch (err) {
      console.log("Erro ao criar grupo.");
    }
  }

  return (
    <S.Container>
      <h3>Pesquisar</h3>
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
        <h3>Sair</h3>
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
