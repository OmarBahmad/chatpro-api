import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { createGroup } from "../../../Actions/Groups";
import * as S from "./styles";

import { ValidNumber } from "../../../hooks/ValidNumber";

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
      if (resp && resp?.code !== 400) {
        toast.success("Grupo criado!");
        setName("");
        setPhones([]);
        setCount(0);
      } else {
        toast.error("Não foi possível criar o grupo!");
      }
    } catch (err) {
      console.log("Erro ao criar grupo.");
    }
  }

  function pushNumber() {
    const isValid = ValidNumber(number);
    if (!isValid) return toast.error("Número Invalido");

    setPhones([...phones, number]);
    setCount(count + 1);
    setNumber("");
    toast.success("Número Adicionado");
  }

  return (
    <S.Container>
      <S.ContainerHeader>
        <h3>Criar Novo</h3>
      </S.ContainerHeader>
      <S.ContainerGroup>
      <S.ContainerCard>
        <S.ContainerHeaderCard>
          <h3>Criar novo grupo</h3>
        </S.ContainerHeaderCard>
        <S.InputNumber
          placeholder="Nome do Grupo"
          className="input-msg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <S.InputNumber
          placeholder="Números a adicionar"
          className="input-msg"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <S.ButtonSend onClick={pushNumber}>Adicionar Números</S.ButtonSend>
        <S.ButtonCreate
          onClick={createG}
          disabled={name === "" || phones.length < 2}
        >
          Criar Grupo
        </S.ButtonCreate>
      </S.ContainerCard>

      <S.ContainerCardNumber>
        {phones.length > 0 && <h3>Números adicionados ({count})</h3>}

        <S.ContainerNumbers>
          {phones?.map((index) => (
            <S.UniqueNumbers>{index} -</S.UniqueNumbers>
          ))}
        </S.ContainerNumbers>
      </S.ContainerCardNumber>
      </S.ContainerGroup>
    </S.Container>
  );
}

/*
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { createGroup } from "../../../Actions/Groups";
import * as S from "./styles";

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
      if (resp) {
        toast.success("Grupo criado!");
      } else {
        toast.error("Não foi possível criar o grupo!");
      }
    } catch (err) {
      console.log("Erro ao criar grupo.");
    }
    setName("");
    setPhones([]);
    setCount(0);
  }

  function pushNumber() {
    if (
      number !== "" &&
      !isNaN(parseFloat(number)) &&
      isFinite(number) &&
      number.length >= 10
    ) {
      setPhones([...phones, number]);
      setCount(count + 1);
      setNumber("");
    }
    toast.error("Número Inválido");
  }

  return (
    <S.Container>
      <S.ContainerHeader>
        <h2>Criar Grupo</h2>
      </S.ContainerHeader>
      <S.InputNumber
        placeholder="Nome do grupo a ser criado"
        className="input-msg"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <S.InputMessage
        placeholder="Numeros a serem criados, separados por virgulas"
        className="input-msg"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <S.ButtonSend onClick={pushNumber}>Adicionar Número</S.ButtonSend>
      <br />
      <br />
      <S.ButtonCreate
        onClick={createG}
        disabled={name === "" || phones.length < 1}
      >
        Criar Grupo
      </S.ButtonCreate>

      {phones.length > 0 && (
        <>
          <h3>Números adicionados ({count})</h3>
        </>
      )}

      {phones?.map((index) => (
        <div>
          <span>{index}</span>
        </div>
      ))}
    </S.Container>
  );
}

*/
