import React from "react";
import { Sidebar } from "../../Components/Sidebar";
import { Container } from "../../Components/Container";
import SendText from "./SendText";
import SendImg from "./SendImg";

export default function Status() {
  return (
    <>
      <Sidebar />
      <Container>
        <SendText />
        <SendImg />
      </Container>
    </>
  );
}
