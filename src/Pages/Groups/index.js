import React from "react";
import Sidebar from "../../Components/newSidebar/Sidebar";
import CreateGroup from "./CreateGroup";
import LeaveGroup from "./LeaveGroup";
import * as S from "./styles";

export default function Chat() {
  return (
    <>
      <Sidebar />
      <S.Container>
        <h1>Grupos</h1>
        <hr></hr>
        <CreateGroup />
        <hr></hr>
        <LeaveGroup />
      </S.Container>
    </>
  );
}
