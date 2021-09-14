
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
      <S.ContainerHeader>
        <h3>Pesquisar um grupo</h3>
      </S.ContainerHeader>

      <S.ContainerGroup>
        <S.ButtonCreate onClick={postB}> Pesquisar grupos </S.ButtonCreate>
        <S.ContainerCardNumber>
          <S.ContainerNumbers>
            {group?.map((index) => (
              <S.UniqueNumbers>
                {" "}
                <strong>Nome do Grupo:</strong> {index.Name}{" "}
                <span>
                  {" "}
                  - <strong>Id: </strong>
                  {index.Jid} |
                </span>{" "}
              </S.UniqueNumbers>
            ))}
          </S.ContainerNumbers>
        </S.ContainerCardNumber>
      </S.ContainerGroup>

      <hr />
      <S.ContainerLeave>
        <S.ContainerHeader>
          <h3>Sair de um grupo</h3>
        </S.ContainerHeader>
        <S.ContainerCard>
          <S.ContainerHeaderCard>
            <h3>Sair</h3>
          </S.ContainerHeaderCard>
          <S.InputNumber
            placeholder="JID do Grupo"
            className="input-msg"
            value={jid}
            onChange={(e) => setJid(e.target.value)}
          />
          <S.ButtonSend onClick={leaveG} disabled={jid === ""}>
            {" "}
            Sair do Grupo{" "}
          </S.ButtonSend>
        </S.ContainerCard>
      </S.ContainerLeave>
    </S.Container>
  );
}
/*

*/
