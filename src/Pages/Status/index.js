import React from "react";
import Sidebar from "../../Components/newSidebar/Sidebar";
import SendText from "./SendText";
import SendImg from "./SendImg";
import * as S from "./styles";

export default function Status() {
  return (
    <>
      <Sidebar />
      <S.Container>
        <SendText />
        <SendImg />
      </S.Container>
    </>
  );
}
