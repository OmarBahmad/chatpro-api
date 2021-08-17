import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./Pages/Login";
import Message from "./Pages/Message";
import Contacts from "./Pages/Contacts";
import Home from "./Pages/Home";
import Chat from "./Pages/Chat";
import Group from "./Pages/Groups";
import Status from "./Pages/Status";
import Instance from "./Pages/Instance";

//import { ExcelToJson } from "./Components/ReadFileXML/ReadFile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/message" component={Message} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/group" component={Group} />
          <Route exact path="/status" component={Status} />
        </Switch>
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
