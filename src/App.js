import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./Pages/Login";
import Message from "./Pages/Message";
import Contacts from "./Pages/Contacts";
import Chat from "./Pages/Chat";
import Group from "./Pages/Groups";
import Status from "./Pages/Status";
import { ProtectedRoute } from "./Components/ProtectedRoute";
// import Instance from "./Pages/Instance";

//import { ExcelToJson } from "./Components/ReadFileXML/ReadFile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <ProtectedRoute exact path="/message" element={<Message/>} />
          <ProtectedRoute exact path="/contacts" element={<Contacts/>} />
          <ProtectedRoute exact path="/chat" element={<Chat/>} />
          <ProtectedRoute exact path="/group" element={<Group/>} />
          <ProtectedRoute exact path="/status" element={<Status/>} />
        </Routes>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </BrowserRouter>
  );
}

export default App;

/*
 <Container>
          <Route exact path="/instance" component={Instance} />

      {/*<div>
        <ExcelToJson />
      </div>
      }
    </Container>

*/
