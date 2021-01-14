import "./App.css";
import React from "react";
import SideBar from "./SideBar";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from './StateProvider';
function App() {
  const [{ user }, setUser] = useStateValue(null);
  return (
    // Bem naming convention
    <div className="app">
      {!user ? (
        <Login></Login>
      ) : (
        <div className="app__body">
          <Router>
            <SideBar></SideBar>
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat></Chat>
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
