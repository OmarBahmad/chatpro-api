import React from "react";
import RefreshWebhook from "./RefreshWebhook";
import Status from "./Status";
import UpdateProfile from "./UpdateProfile";
import QRCode from "./GenerateQRCode"

export default function Instance() {
  return (
    <div>
      <QRCode />
      <Status />
      <UpdateProfile />
      <RefreshWebhook />
    </div>
  );
}
