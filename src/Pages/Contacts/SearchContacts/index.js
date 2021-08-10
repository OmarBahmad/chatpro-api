import React from "react";
import { getContacts } from "../../../Actions/Contacts";

export default function SearchContacts() {
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
      <h2>Retornar lista de Contatos</h2>
      <button onClick={postB}>Retornar lista de Contatos</button>
    </div>
  );
}
