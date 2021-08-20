import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { createGroup } from "../../../Actions/Groups";

export default function CreateGroup() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [count, setCount] = useState(0);
  const [phones, setPhones] = useState([]);

  async function createG() {
    const obj = {
      phones: phones,
      name: name,
    };
    try {
      const resp = await createGroup(obj);
      if (resp ) {
        toast.success("Grupo criado!");
      } else {
        toast.error("Não foi possível criar o grupo!");
      }
    } catch (err) {
      console.log("Erro ao criar grupo.");
    }
    setName("");
    setPhones([]);
    setCount(0)
  }

  function pushNumber() {
    setPhones([...phones, number]);
    setCount(count + 1);
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

      {phones.length > 0 && (
        <>
          <h3>Números adicionados ({count})</h3>
        </>
      )}

      {phones?.map((index) => (
        <div>
          <p>
            <span>{index}</span>{" "}
          </p>
        </div>
      ))}
    </div>
  );
}
