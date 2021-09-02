import React from "react";
import Sidebar from "../../Components/newSidebar/Sidebar";
import SearchContacts from "./SearchContacts";
import GetUniqueContact from "./GetUniqueContact";

export default function Contacts() {
  return (
    <>
      <Sidebar />
      <h1>Buscar Contatos</h1>
      <GetUniqueContact />
      <SearchContacts />
    </>
  );
}
