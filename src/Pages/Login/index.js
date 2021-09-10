import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

export default function Login() {
  const [chatId, setChatId] = useState("");
  const [tokenID, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("@chatID") && localStorage.getItem("@tokenID")) {
      navigate("/messages/text");
    } else {
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    <S.ContainerUp>
      <S.ContainerLogin>
        <S.Login> PLENO API</S.Login>
        <S.Input
          type="text"
          value={chatId}
          placeholder="Informar o ChatID"
          onChange={(e) => setChatId(e.target.value)}
        />
        <S.Input
          type="text"
          value={tokenID}
          placeholder="Informar o Token"
          onChange={(e) => setToken(e.target.value)}
        />
        <S.Button onClick={handleLogin}>Login</S.Button>
      </S.ContainerLogin>
    </S.ContainerUp>
  );
}
