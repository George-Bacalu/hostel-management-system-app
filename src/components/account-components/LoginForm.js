import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

import "./FormStyles.css";
import FormField from "../FormField";

function LoginForm(props) {
  const [inputText, setInputText] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();

  function handleChange(id, value) {
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
          <header className="btn btn-dark btn-lg btn-block form-heading">LOGIN FORM</header>
          <form className="form-layout" id="login-form">
            <div className="form-group text-left">
              <FormField
                key="email"
                id="email"
                outerClasses="form-group text-left"
                labelScope="inputEmail"
                inputName="Email address"
                type="email"
                placeholder="Enter email"
                value={inputText.email}
                onModification={handleChange}
              />
              <FormField
                key="password"
                id="password"
                outerClasses="form-group text-left"
                labelScope="inputPassword"
                inputName="Password"
                type="password"
                placeholder="Enter password"
                value={inputText.password}
                onModification={handleChange}
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
