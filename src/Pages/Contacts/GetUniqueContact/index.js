/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { getProfile } from "../../../Actions/Contacts";
import * as S from "./styles";
import { ValidNumber } from "../../../hooks/ValidNumber";


export default function GetUniqueContact() {
  const [number, setNumber] = useState("");
  const [data, setData] = useState([]);
  const [respTrue, setRespTrue] = useState(false);

  async function sendCTT() {
    const isValid = ValidNumber(number);
    if (!isValid) return toast.error("Número Invalido");
    const obj = {
      number,
    };
    try {
      const resp = await getProfile(obj);

      if (resp?.length && resp?.code !== 400) {
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
    <S.Container>
      <S.ContainerHeader>
        <h3>Obter Perfil</h3>
      </S.ContainerHeader>
      <S.InputNumber
        placeholder="Número"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <S.ButtonSend onClick={sendCTT} disabled={number === ""} >Obter Contato</S.ButtonSend>
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
    </S.Container>
  );
}

/*
number: "62982530552"
*/
