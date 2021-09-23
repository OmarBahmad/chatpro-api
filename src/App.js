import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import Login from "./Pages/Login";
import SendMessage from "./Pages/Message/SendMessage";
import SendFile from "./Pages/Message/SendFile";
import SendLocation from "./Pages/Message/SendLocation";
import SendContact from "./Pages/Message/SendContact";
import DeleteMessage from "./Pages/Message/DeleteMessage";
import Chat from "./Pages/Chat";
import Contacts from "./Pages/Contacts";
import Groups from "./Pages/Groups";
import Status from "./Pages/Status";
import Spreadsheet from "./Pages/Spreadsheet";
import Logout from "./Pages/Logout";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";

import theme from "./styles/theme";

function App() {
  return (
    <main className="main_app">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <ProtectedRoute
              path="/messages/text"
              exact
              element={<SendMessage />}
            />
            <ProtectedRoute
              path="/messages/file"
              exact
              element={<SendFile />}
            />
            <ProtectedRoute
              path="/messages/localization"
              exact
              element={<SendLocation />}
            />
            <ProtectedRoute
              path="/messages/contact"
              exact
              element={<SendContact />}
            />
            <ProtectedRoute
              path="/messages/delete"
              exact
              element={<DeleteMessage />}
            />
            <ProtectedRoute path="/chat" exact element={<Chat />} />
            <ProtectedRoute path="/contacts" exact element={<Contacts />} />
            <ProtectedRoute path="/groups" exact element={<Groups />} />
            <ProtectedRoute path="/status" exact element={<Status />} />
            <ProtectedRoute
              path="/spreadsheet"
              exact
              element={<Spreadsheet />}
            />
            <ProtectedRoute path="/logout" exact element={<Logout />} />
          </Routes>
          <Toaster position="top-right" reverseOrder={false} />
        </Router>
        <GlobalStyles />
      </ThemeProvider>
    </main>
  );
}
export default App;
