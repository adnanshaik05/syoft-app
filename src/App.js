import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from "./components/SignUp";
import LogIn from "./components/LoginIn";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" exact component={SignUp} />
        <Route exact path="/login" component={LoginIn} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
