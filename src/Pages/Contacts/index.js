import React from "react";
import Sidebar from "../../Components/newSidebar/Sidebar";
import SearchContacts from "./SearchContacts";
import GetUniqueContact from "./GetUniqueContact";
import * as S from './styles'

export default function Contacts() {
  return (
    <>
      <Sidebar />
      <S.Container>
        <h1>Buscar Contatos</h1>
        <GetUniqueContact />
        <SearchContacts />
      </S.Container>
    </>
  );
}
