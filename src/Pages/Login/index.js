import React, { Component, useState } from "react";
import { NavLink, Navigate, Route, useNavigate } from "react-router-dom";

export default function Login() {
  const [chatId, setChatId] = useState("");
  const [tokenID, setToken] = useState("");
  const navigate = useNavigate()


  function handleLogin() {
    localStorage.setItem("@chatID", JSON.stringify(chatId));
    localStorage.setItem("@tokenID", JSON.stringify(tokenID));
    navigate("/message")

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
        <button onClick={handleLogin}>
         Login 
        </button>

    </div>
  );
}
