import './App.css';
import Home from './components/Pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Entries from './components/Pages/DashBoard/Entries/Entries';
import EntryDetails from './components/EntryDetails/EntryDetails';
import SignIn from './components/Pages/Authentication/SignIn/SignIn';
import SignUp from './components/Pages/Authentication/SignUp/SignUp';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import Chat from '../src/components/ChatProps/Chat';
import Signin from './components/ChatProps/Signin';
import { auth } from '../src/components/ChatProps/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [user] = useAuthState(auth)
  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
          <PrivateRoute path="/dashboard">
          <Entries></Entries>
          </PrivateRoute>
          <Route path="/entry/:entryId">
          <EntryDetails></EntryDetails>
        </Route>
        <Route path="/signIn">
          <SignIn></SignIn>
        </Route>
        <Route path="/signUp">
          <SignUp></SignUp>
        </Route>
          <Route exact path="/">
          <Home></Home>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
      {user ? <Chat /> : <Signin />}
    </div>
  );
}

export default App;
