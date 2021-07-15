import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import StudentsData from "./pages/StudentsData";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Switch>
      <Route path="/" exact={true}>
        <HomePage />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/reports">
        <Reports />
      </Route>
      <Route path="/students-data">
        <StudentsData />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
