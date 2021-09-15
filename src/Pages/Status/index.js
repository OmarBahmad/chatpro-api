import React from "react";
import { Sidebar } from "../../Components/Sidebar";
import SendText from "./SendText";
import SendImg from "./SendImg";
import * as S from "./styles";

export default function Status() {
  return (
    <>
      <Sidebar />
      <S.Container>
        <h1>Status</h1>
        <hr />
        <S.ContainerBody>
          <S.ContainerBodyHeader>
            <h3>Status</h3>
          </S.ContainerBodyHeader>
            <SendText />
            <SendImg />
        </S.ContainerBody>
      </S.Container>
    </>
  );
}
