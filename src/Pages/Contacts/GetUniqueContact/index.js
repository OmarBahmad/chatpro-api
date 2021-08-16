/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { getProfile } from "../../../Actions/Contacts";


export default function GetUniqueContact() {
  const [number, setNumber] = useState("");
  const [data,setData] = useState([])


  async function sendCTT() {
    const obj = {
      number,
    };
    try {
      const resp = await getProfile(obj);
      alert("Contato obtido com sucesso.");
      console.log(resp);
      setData(resp)
    } catch (err) {
      console.log("erro");
    }
    setNumber("");
  }
  return (
    <div>
      <h2>Obter Perfil</h2>
      <input
        placeholder="Número"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={sendCTT}>Obter Contato</button>
      <div>
        <h3>Contato</h3>
        <div>
          <p>{data.name}</p>
          <p>{data.jid}</p>
          <img src={data.eurl} />
        </div>
      </div>
    </div>
  );
}

/*
number: "62982530552"
*/