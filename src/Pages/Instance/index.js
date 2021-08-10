import React from "react";
import RefreshWebhook from "./RefreshWebhook";
import Status from "./Status";
import UpdateProfile from "./UpdateProfile";
import QRCode from "./GenerateQRCode";
import Reload from "./Reload";
import RemoveSession from "./RemoveSession";

export default function Instance() {
  return (
    <div>
      <QRCode />
      <Reload />
      <RemoveSession />
      <Status />
      <UpdateProfile />
      <RefreshWebhook />
    </div>
  );
}
