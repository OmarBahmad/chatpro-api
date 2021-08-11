import React from "react";
import GetChat from "./GetChat";
import { Sidebar } from "../../Components/Sidebar";
import { Container } from "../../Components/Container";


export default function Chat() {
  return (
    <>
      <Sidebar />
      <Container>
        <GetChat />
      </Container>
    </>
  );
}
