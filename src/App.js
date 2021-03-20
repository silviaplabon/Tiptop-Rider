import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useState } from 'react';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const UserContext=createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/vehicle/:carname">
            <Destination />
          </PrivateRoute>
          {/* 
          <PrivateRoute path="/protected">
            <ProtectedPage />
          </PrivateRoute>
          <Route path="/dashboard">
            <Dashboard />
          </Route> */}
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
