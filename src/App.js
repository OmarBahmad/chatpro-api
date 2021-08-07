import React, { useState } from "react";
import { createPost } from "./Components/SendMensage/SendMensage";
import { Container } from "./styles";
import {ExcelToJson} from "./Components/SendMensage/ReadFileXML/ReadFile"

function App() {
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");

  async function postA() {
    const obj = {
      number: number,
      message:message
    }

    try {
      await createPost(obj);
      alert("Post Adicionado com sucesso.");
    } catch (err) {
      console.log("erro");
    }
    setMessage("");
    setNumber("");
  }

  return (
    <Container>
      <input
        placeholder="Numero"
        className="input-msg"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <input
        placeholder="Mensagem"
        className="input-msg"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={postA}>Enviar Mensagem</button>
    </Container>
  );
}

export default App;
