import React from "react";
import { Sidebar } from "../../Components/Sidebar";
import GetChat from "./GetChat";
import * as S from "./styles";

export default function Chat() {
  return (
    <>
      <Sidebar />
      <S.Container>
        <h1>Chat</h1>
        <hr></hr>
        <GetChat />
      </S.Container>
    </>
  );
}
