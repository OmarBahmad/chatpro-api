import React, { useState } from "react";
import SendUniqueMessage from "./SendUniqueMessage";
import SendMultipleMessages from "./SendMultipleMessages";
import Sidebar from "../../../Components/newSidebar/Sidebar";
import DataTable from "../../../Components/DataTable";

import * as S from "./Styles";

export default function SendMessage() {
  const [items, setItems] = useState([]);
  const [respTrue, setRespTrue] = useState([]);
  const [respFalse, setRespFalse] = useState([]);
  const [respAll, setRespAll] = useState([]);

  return (
    <>
      <Sidebar />
      <S.Container>
        <S.Column1>
          <h2>Enviar Mensagens</h2>
          <SendUniqueMessage />
          <SendMultipleMessages
            items={items}
            setItems={setItems}
            respTrue={respTrue}
            setRespTrue={setRespTrue}
            respFalse={respFalse}
            setRespFalse={setRespFalse}
            setRespAll={setRespAll}
          />
        </S.Column1>
        <S.Column2>
          <DataTable type="message" data={respAll} />
        </S.Column2>
      </S.Container>
    </>
  );
}
/*

FAZER UMA TABLE PRA MOSTRAR OS DADOS

{items?.map((index) => (
        <div key={index.mensagem}>
          <p>
            Número: {index.numero} - Mensagem: {index.mensagem}
          </p>
        </div>
      ))}
{items?.map((index) => (
  <div key={index.mensagem}>
    <p>
      Número: {index.numero} - Mensagem: {index.mensagem}
    </p>
  </div>
))}
{checkMessage?.map((index) => (
  <div key={index.sendTrue}>
    <p>Mensagem Enviada: {index.sendTrue === true ? "Sim" : "Não"}</p>
  </div>
))}
*/
