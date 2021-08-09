import React from "react";
import SendMessage from "./SendMessage";
import DeleteMessage from "./DeleteMessage";
import SendFile from "./SendFile";
import SendLocation from "./SendLocation";
import SendContact from "./SendContact";
import SendMessageTemplate from "./SendMessageTemplate";

export default function Chat() {
  return (
    <div>
      <SendMessage />
      <DeleteMessage />
      <SendFile />
      <SendLocation />
      <SendContact />
      <SendMessageTemplate />
    </div>
  );
}
