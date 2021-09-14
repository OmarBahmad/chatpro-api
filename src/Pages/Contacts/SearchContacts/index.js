import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { getContacts } from "../../../Actions/Contacts";
import ExportExcelMessageSucess from "../../../Components/ExportExcel/ExportExcelMessageSucess";
import * as S from "./styles";

export default function SearchContacts() {
  const [data, setData] = useState([]);

  async function postB() {
    try {
      const resp = await getContacts();
      if (resp.length && resp?.code !== 400) {
        setData(resp);
        toast.success("Lista de contatos retornados com sucesso!");
      } else {
        toast.error("Não foi possível efetuar a busca!");
      }
    } catch (err) {
      console.log("erro");
    }
  }
  return (
    <S.Container>
      <S.ContainerHeader>
        <h3>Retornar lista de Contatos</h3>
      </S.ContainerHeader>
      <S.ButtonSend onClick={postB}>Retornar lista</S.ButtonSend>

      {data.length > 0 && (
        <>
          <ExportExcelMessageSucess
            respTrue={data}
            collum1="Jid"
            collum2="Name"
            collum3="Short"
            nameButton="Download da lista de contatos"
            nameFile={"Lista de Contatos"}
          />
        </>
      )}
    </S.Container>
  );
}
