import React, { useState } from "react";
import { sendLocation } from "../../../../Actions/Message";

export default function SendUniqueLocation() {
  const [address, setAddress] = useState("");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
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
    setLat(0);
    setLng(0);
    setName("");
    setNumber("");
  }
  return (
    <div>
      <h2>Enviar Localização</h2>
      <input
        placeholder="Endereço"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        placeholder="Latitude"
        type="number"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
      />
      <input
        placeholder="Longitude"
        type="number"
        value={lng}
        onChange={(e) => setLng(e.target.value)}
      />
      <input
        placeholder="Nome do local"
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

/*
  
*/
