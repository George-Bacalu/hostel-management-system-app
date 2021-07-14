import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
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
  function handleSubmitClick(event) {
    event.preventDefault();
    if (inputText.password === inputText.confirmPassword) {
      //sendDetailsToServer()
    } else {
      //props.showError('Passwords do not match');
    }
  }

  return (
    <section className="form-container">
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center justify-content-center">
        <form style={{ padding: "20px" }} id="login-form">
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
          <button type="submit" className="btn btn-dark button-layout" onClick={handleSubmitClick}>
            Login
          </button>
        </form>
      </div>
    </section>
  );
}

export default LoginForm;
