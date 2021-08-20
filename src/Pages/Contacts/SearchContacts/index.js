import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { getContacts } from "../../../Actions/Contacts";
import ExportExcelMessageSucess from "../../../Components/ExportExcel/ExportExcelMessageSucess";

export default function SearchContacts() {
  const [data, setData] = useState([]);

  async function postB() {
    try {
      const resp = await getContacts();
      if (resp) {
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
    <div>
      <h2>Retornar lista de Contatos</h2>
      <button onClick={postB}>Retornar lista de Contatos</button>

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
    </div>
  );
}
