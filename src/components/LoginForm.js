import React, { useState } from "react";
import "./LoginForm.css";
import FormHeader from "./FormHeader";
import { Link } from "react-router-dom";

function LoginForm(props) {
  const [inputText, setInputText] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(event) {
    const { id, value } = event.target;
    setInputText((prevValue) => ({
      ...prevValue,
      [id]: value,
    }));
  }

  /*
  function handleSubmitClick(event) {
    event.preventDefault();
    if (inputText.password === inputText.confirmPassword) {
      //sendDetailsToServer()
    } else {
      //props.showError('Passwords do not match');
    }
  }
  */

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
            <button type="submit" className="btn btn-dark button-layout">
              Login
            </button>
            {/* onClick={handleSubmitClick} */}
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
