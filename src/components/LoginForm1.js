import React, { useState } from "react";
import classes from "./LoginForm.module.css";
import { Link, useHistory } from "react-router-dom";
//import { auth } from "./firebase";
import hostel_logo from "../images/hostel-logo.png";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signIn(event) {
    event.preventDefault();
    history.push("/dashboard");
  }

  function register(event) {
    event.preventDefault();
    history.push("/dashboard");
  }

  /*
  const signIn = (e) => {
    e.preventDefault();

    //some fancy firebase login stuff

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    //do some fancy firebase register stuff

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //it successfully created a new user with email and password
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  */

  return (
    <div className={classes.login}>
      <Link to="/">
        <img className={classes.login_logo} src={hostel_logo} alt="hostel_logo" />
      </Link>

      <div className={classes.login_container}>
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button type="submit" onClick={signIn} className={classes.login_signInButton}>
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the HOSTEL MANAGEMENT SYSTEM Conditions of Use & Sale. Please see our Privacy Notice, our
          Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button onClick={register} className={classes.login_registrationButton}>
          Create your Student Account
        </button>
      </div>
    </div>
  );
}

export default Login;
