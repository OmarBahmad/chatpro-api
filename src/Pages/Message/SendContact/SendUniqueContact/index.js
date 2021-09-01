import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { sendContact } from "../../../../Actions/Message";
import * as S from "./styles";

export default function SendUniqueContact() {
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
      if (resp.Status) {
        toast.success("Contato enviado com Sucesso");
        setContactName("");
        setContactNumber("");
        setNumber("");
      } else {
        toast.error("Contato não enviado");
      }
    } catch (err) {}
  }

  return (
    <S.Container>
      <S.ContainerHeader>
        <h4>Enviar Localização</h4>
      </S.ContainerHeader>
      <S.InputContact
        placeholder="Nome do Contato"
        value={contact_name}
        onChange={(e) => setContactName(e.target.value)}
      />
      <S.InputContactNumber
        placeholder="Numero desse contato"
        value={contact_number}
        onChange={(e) => setContactNumber(e.target.value)}
      />
      <S.InputNumber
        placeholder="Número"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <S.ButtonSend onClick={sendCTT}>Enviar Contato</S.ButtonSend>
    </S.Container>
  );
}

/*
      contact_name: "Vitor Henrique",
      contact_number: "62982530552",
      number: "62996422859",
*/
