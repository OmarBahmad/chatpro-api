import React from "react";
import RefreshWebhook from "./RefreshWebhook";
import Status from "./Status";
import UpdateProfile from "./UpdateProfile";

export default function Instance() {
  return (
    <div>
      <Status />
      <UpdateProfile />
      <RefreshWebhook />
    </div>
  );
}
