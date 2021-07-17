import React, { useState } from "react";
import "./LoginForm.css";
import FormHeader from "./FormHeader";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

function LoginForm(props) {
  const [inputText, setInputText] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();

  function handleChange(event) {
    const { id, value } = event.target;
    setInputText((prevValue) => ({
      ...prevValue,
      [id]: value,
    }));
  }

  function signIn(event) {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(inputText.email, inputText.password)
      .then((auth) => {
        history.push("/dashboard");
      })
      .catch((error) => alert(error.message));
  }

  return (
    <div>
      <section className="form-container">
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center justify-content-center">
          <FormHeader message="LOGIN FORM" />
          <form className="form-layout" id="login-form">
            <div className="form-group text-left">
              <label htmlFor="inputEmail">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={inputText.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group text-left">
              <label htmlFor="inputPassword">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={inputText.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-dark button-layout" onClick={signIn}>
              Sign in
            </button>
            <small id="doNotHaveAccount">
              Don't have an account?{" "}
              <Link to="/account" style={{ color: "#476072" }} onClick={props.onLogin}>
                Register here!
              </Link>
            </small>
          </form>
        </div>
      </section>
    </div>
  );
}

export default LoginForm;
