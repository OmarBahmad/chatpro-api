import React, { useState } from "react";
import { sendLocation } from "../../../../Actions/Message";
import * as S from "./styles";

export default function SendUniqueLocation() {
  const [address, setAddress] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  async function sendLocal() {
    const obj = {
      address,
      lat: Number(lat),
      lng: Number(lng),
      name,
      number,
    };
    try {
      await sendLocation(obj);
      alert("Localização enviada com sucesso.");
    } catch (err) {
      console.log("erro");
    }
    setAddress("");
    setLat("");
    setLng("");
    setName("");
    setNumber("");
  }
  return (
    <S.Container>
      <S.ContainerHeader>
        <h4>Enviar Localização</h4>
      </S.ContainerHeader>
      <S.Input
        placeholder="Endereço"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <S.Input
        placeholder="Latitude (opcional)"
        type="number"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
      />
      <S.Input
        placeholder="Longitude (opcional)"
        type="number"
        value={lng}
        onChange={(e) => setLng(e.target.value)}
      />
      <S.Input
        placeholder="Nome do local"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <S.Input
        placeholder="Número"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <S.ButtonSend onClick={sendLocal}>Enviar Localização</S.ButtonSend>
    </S.Container>
  );
}
