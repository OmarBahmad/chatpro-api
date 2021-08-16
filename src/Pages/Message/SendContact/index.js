import React, { useState } from "react";
import { sendContact } from "../../../Actions/Message";

export default function SendContact() {
  const [contact_name, setContactName] = useState("");
  const [contact_number, setContactNumber] = useState("");
  const [number, setNumber] = useState("");

  async function sendCTT() {
    const obj = {
      contact_name,
      contact_number,
      number,
    };
    try {
      const resp = await sendContact(obj);
      alert("Contato enviado com sucesso.");
    } catch (err) {
      console.log("erro");
    }
    setContactNumber("");
    setContactName("");
    setNumber("");
  }
  return (
    <div>
      <h2>Enviar Contato</h2>
      <input
        placeholder="Nome do Contato"
        value={contact_name}
        onChange={(e) => setContactName(e.target.value)}
      />
      <input
        placeholder="Numero desse contato"
        value={contact_number}
        onChange={(e) => setContactNumber(e.target.value)}
      />
      <input
        placeholder="Número"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={sendCTT}>Enviar Contato</button>
    </div>
  );
}


/*
      contact_name: "Vitor Henrique",
      contact_number: "62982530552",
      number: "62996422859",
*/