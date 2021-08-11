import React from "react";
import { Sidebar } from "../../Components/Sidebar";
import { Container } from "../../Components/Container";
import CreateGroup from "./CreateGroup";
import LeaveGroup from "./LeaveGroup";

export default function Chat() {
  return (
    <>
      <Sidebar />
      <Container>
        <CreateGroup />
        <LeaveGroup />
      </Container>
    </>
  );
}
