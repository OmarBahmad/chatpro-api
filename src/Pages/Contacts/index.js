import React from "react";
import { getContacts } from "../../Actions/Contacts";

export default function Contacts() {
  async function postB() {
    try {
      const resp = await getContacts();
      console.log(resp);
    } catch (err) {
      console.log("erro");
    }
  }

  return (
    <div>
      <button onClick={postB}>Retornar lista de Chats</button>
    </div>
  );
}
