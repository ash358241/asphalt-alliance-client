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
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/dashboard">
          <Entries></Entries>
          </Route>
          <Route path="/entry/:entryId">
          <EntryDetails></EntryDetails>
        </Route>
          <Route exact path="/">
          <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
