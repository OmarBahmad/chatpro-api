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
        <CreateGroup />
        <LeaveGroup />
      </S.Container>
    </>
  );
}
