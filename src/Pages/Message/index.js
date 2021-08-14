import React from "react";
import { Sidebar } from "../../Components/Sidebar";
import { Container } from "../../Components/Container";
import SendMessage from "./SendMessage";
import DeleteMessage from "./DeleteMessage";
import SendFile from "./SendFile";
import SendLocation from "./SendLocation";
import SendContact from "./SendContact";
import SendMessageTemplate from "./SendMessageTemplate";

export default function Chat() {
  return (
    <>
      <Sidebar />
      <Container>
        <SendMessage />
        <DeleteMessage />
        <SendFile />
        <SendLocation />
        <SendContact />
        <SendMessageTemplate />
      </Container>
    </>
  );
}
