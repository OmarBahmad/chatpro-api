import React from "react";
import { getChat } from "../../../Actions/Chat";

export default function GetChat() {
  async function postB() {
    try {
      const resp = await getChat();
      console.log(resp);
    } catch (err) {
      console.log("erro");
    }
  }
  return (
    <div>
      <h2>Retornar lista de Chat</h2>
      <button onClick={postB}>Retornar lista de Chats</button>
    </div>
  );
}
