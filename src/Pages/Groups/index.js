import React from "react";
import Sidebar from "../../Components/newSidebar/Sidebar";

import CreateGroup from "./CreateGroup";
import LeaveGroup from "./LeaveGroup";

export default function Chat() {
  return (
    <>
      <Sidebar />
      <CreateGroup />
      <LeaveGroup />
    </>
  );
}
