import React, { useState } from "react";
import { leaveGroup } from "../../../Actions/Groups";
import { getChat } from "../../../Actions/Chat";

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
    <div>
      <br />
      <h2>Pesquisar Grupos</h2>
      <button onClick={postB}> Pesquisar grupos </button>
      <br />
      {group?.map((index) => (
        <>
          <p>
            Nome do Grupo: {index.Name} <span> Id: {index.Jid}</span>{" "}
          </p>
        </>
      ))}
      <h2>Sair de um grupo</h2>
      <input
        placeholder="JID do Grupo"
        className="input-msg"
        value={jid}
        onChange={(e) => setJid(e.target.value)}
      />
      <button onClick={leaveG}> Sair do Grupo </button>
    </div>
  );
}
