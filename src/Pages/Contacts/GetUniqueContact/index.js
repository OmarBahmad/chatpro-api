/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { getProfile } from "../../../Actions/Contacts";

export default function GetUniqueContact() {
  const [number, setNumber] = useState("");
  const [data, setData] = useState([]);
  const [respTrue, setRespTrue] = useState(false);

  async function sendCTT() {
    const obj = {
      number,
    };
    try {
      const resp = await getProfile(obj);

      if (resp) {
        setData(resp);
        toast.success("Contato obtido com sucesso.");
        setData(resp);
        setRespTrue(true);
      } else {
        toast.error("Não foi possível efetuar a busca!");
      }
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
      {respTrue && (
        <div>
          <p>
            <strong>Nome: </strong>
            {data.name}
          </p>
          <p>
            <strong>Número: </strong>
            {data.jid}
          </p>
          <img src={data.eurl} height="300px" />
        </div>
      )}
    </div>
  );
}

/*
number: "62982530552"
*/
