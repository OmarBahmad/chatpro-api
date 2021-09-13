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
        <h1>Contatos</h1>
        <hr></hr>
        <GetUniqueContact />
        <hr></hr>
        <SearchContacts />
      </S.Container>
    </>
  );
}
