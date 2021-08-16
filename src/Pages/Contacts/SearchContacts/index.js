import React, { useState } from "react";
import { getContacts } from "../../../Actions/Contacts";

import ExportExcelContacts from "../../../Components/ExportExcel/Contacts/index";

export default function SearchContacts() {
  const [data,setData] = useState([])

  async function postB() {
    try {
      const resp = await getContacts();
      console.log(resp);
      setData(resp)
      alert("Contatos importados com sucesso!")
    } catch (err) {
      console.log("erro");
    }
  }
  return (
    <div>
      <h2>Retornar lista de Contatos</h2>
      <button onClick={postB}>Retornar lista de Contatos</button>
      <ExportExcelContacts data={data}/>
    </div>
  );
}
