import React, { useState } from "react";

export default function Login() {
  const [chatId, setChatId] = useState("");
  const [tokenID, setToken] = useState("");

  function handleLogin() {
    localStorage.setItem("@chatID", JSON.stringify(chatId));
    localStorage.setItem("@tokenID", JSON.stringify(tokenID));
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Informar o ChatID"
        onChange={(e) => setChatId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Informar o Token"
        onChange={(e) => setToken(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
