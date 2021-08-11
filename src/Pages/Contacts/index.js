import React from "react";
import { Sidebar } from "../../Components/Sidebar";
import { Container } from "../../Components/Container";
import SearchContacts from "./SearchContacts";
import GetUniqueContact from "./GetUniqueContact";

export default function Contacts() {
  return (
    <>
      <Sidebar />
      <Container>
        <SearchContacts />
        <GetUniqueContact />
      </Container>
    </>
  );
}
