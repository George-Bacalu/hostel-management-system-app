import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import StudentsData from "./pages/StudentsData";
import Account from "./pages/Account";
import HomePage from "./pages/HomePage";
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
  }, []);

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
      <Route path="/account">
        <Account />
      </Route>
    </Switch>
  );
}

export default App;
