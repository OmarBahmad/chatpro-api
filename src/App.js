import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Message from "./Pages/Message";
import Contacts from "./Pages/Contacts";
import Home from "./Pages/Home";
import Chat from "./Pages/Chat";
import Group from "./Pages/Groups";
import Status from "./Pages/Status";


//import { ExcelToJson } from "./Components/ReadFileXML/ReadFile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/message" component={Message} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/group" component={Group} />
          <Route exact path="/status" component={Status} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

/*
 <Container>
      {/*<div>
        <ExcelToJson />
      </div>
      }
    </Container>

*/
