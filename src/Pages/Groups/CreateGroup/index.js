import React, { useState } from "react";
import { createGroup } from "../../../Actions/Groups";

export default function CreateGroup() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [phones, setPhones] = useState([]);

async function createG() {
  const obj = {
    phones: phones,
    name: name,
  };
  try {
    await createGroup(obj);
    alert("Grupo criado");
    console.log(phones);
  } catch (err) {
    console.log("Erro ao criar grupo.");
  }
  setName("");
  setPhones([]);
}

function pushNumber(){
    setPhones([...phones,number]);
    setNumber("");
}

return (
  <div>
    <h2>Criar Grupo</h2>
    <input
      placeholder="Nome do grupo a ser criado"
      className="input-msg"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <br />
    <input
      placeholder="Numeros a serem criados, separados por virgulas"
      className="input-msg"
      value={number}
      onChange={(e) => setNumber(e.target.value)}
    />

    <button onClick={pushNumber}>Adicionar Número</button>
    <br />
    <br />
    <button onClick={createG}>Criar Grupo</button>
  </div>
);

}
