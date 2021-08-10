import React, {useState} from "react";
import { getChat } from "../../../Actions/Chat";

export default function GetChat() {

  const [group, setGroup] = useState([])

  async function postB() {
    try {
      const resp = await getChat();

      const json = await resp?.filter((group) => group.Jid.includes("@g.us"))

      setGroup(json)
      console.log(resp);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <h2>Retornar lista de Chat</h2>
      <button onClick={postB}>Retornar lista de Chats</button>
      {console.log(group)}
    </div>
  );
}
