import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

export default function Login() {
  const [chatId, setChatId] = useState("");
  const [tokenID, setToken] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    setChatId("");
    setToken("");
    if (
      !(
        chatId.includes("chatpro") &&
        chatId.length >= 18 &&
        tokenID.length >= 29
      )
    )
      return alert("ChatID ou token invalido");
    localStorage.setItem("@chatID", JSON.stringify(chatId));
    localStorage.setItem("@tokenID", JSON.stringify(tokenID));
    navigate("/messages/text");
  }
  return (
    <S.Container>
      <S.ContainerLogin>
        <input
          type="text"
          value={chatId}
          placeholder="Informar o ChatID"
          onChange={(e) => setChatId(e.target.value)}
        />
        <input
          type="text"
          value={tokenID}
          placeholder="Informar o Token"
          onChange={(e) => setToken(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </S.ContainerLogin>
    </S.Container>
  );
}
