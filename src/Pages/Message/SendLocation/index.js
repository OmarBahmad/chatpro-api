import React, { useState } from "react";
import { sendLocation } from "../../../Actions/Message";

export default function SendLocation() {
  const [address, setAddress] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  async function sendLocal() {
    const obj = {
      address,
      lat,
      lng,
      name,
      number
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
    <div>
      <h2>Enviar Localização</h2>
      <input
        placeholder="Endereço"
        value={setAddress}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        placeholder="Latitude"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
      />
      <input
        placeholder="Longitude"
        value={lng}
        onChange={(e) => setLng(e.target.value)}
      />
      <input
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Número"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={sendLocal}>Enviar Localização</button>
    </div>
  );
}
