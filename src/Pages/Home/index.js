import React from "react";
import { Sidebar } from "../../Components/Sidebar";
import { Container } from "../../Components/Container";

export default function Home() {
  return (
    <>
      <Sidebar />
      <Container>
        <div>Inicio</div>
      </Container>
    </>
  );
}
