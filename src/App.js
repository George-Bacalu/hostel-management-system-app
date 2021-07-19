import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import StudentsData from "./pages/StudentsData";
import Reports from "./pages/Reports";
import Account from "./pages/Account";
import HostelDatabase from "./pages/HostelDatabase";
import Layout from "./layout/Layout";

import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // run once when the app component loads (like a dynamic if statement)
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS: ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <Layout>
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
        <Route path="/students-data" exact={true}>
          <StudentsData />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
