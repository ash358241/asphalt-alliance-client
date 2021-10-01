import "./App.css";
import Home from "./components/Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Entries from "./components/Pages/DashBoard/Entries/Entries";
import EntryDetails from "./components/EntryDetails/EntryDetails";
import SignIn from "./components/Pages/Authentication/SignIn/SignIn";
import SignUp from "./components/Pages/Authentication/SignUp/SignUp";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ChatBox from "./components/ChatBox/ChatBox";
import SpecificEntry from "./components/SpecificEntry/SpecificEntry";
import ProvideFeedback from "./components/ProvideFeedback/ProvideFeedback";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="app">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/dashboard">
              <Entries></Entries>
            </PrivateRoute>
            <PrivateRoute path="/entry/:entryId">
              <EntryDetails></EntryDetails>
            </PrivateRoute>
            <PrivateRoute path="/specificEntry">
              <SpecificEntry></SpecificEntry>
            </PrivateRoute>
            <PrivateRoute path="/provideFeedback">
              <ProvideFeedback></ProvideFeedback>
            </PrivateRoute>
            <Route path="/signIn">
              <SignIn></SignIn>
            </Route>
            <Route path="/signUp">
              <SignUp></SignUp>
            </Route>
            <Route path="/chat">
              <ChatBox></ChatBox>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
