import React, { useState } from "react";
import "./RegistrationForm.css";
import { Link } from "react-router-dom";
import FormHeader from "./FormHeader";

function RegistrationForm(props) {
  const [inputText, setInputText] = useState({
    firstName: "",
    lastName: "",
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
    <section className="form-container">
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center justify-content-center">
        <FormHeader message="REGISTRATION FORM" />
        <form className="form-layout" id="form-register">
          <div class="row mb-4">
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="form3Example1">
                  First name
                </label>
                <input
                  type="text"
                  id="form3Example1"
                  class="form-control"
                  placeholder="First name"
                  value={inputText.firstName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="form3Example1">
                  Last name
                </label>
                <input
                  type="text"
                  id="form3Example1"
                  class="form-control"
                  placeholder="Last name"
                  value={inputText.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
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
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
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
          <div className="form-group text-left">
            <label htmlFor="inputConfirmPassword">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Confirm password"
              value={inputText.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-dark button-layout">
            Register
          </button>
          {/* onClick={handleSubmitClick} */}
          <small id="alreadyHaveAccount">
            Already have an account?{" "}
            <Link to="/account" style={{ color: "#476072" }} onClick={props.onRegister}>
              Login here!
            </Link>
          </small>
        </form>
      </div>
    </section>
  );
}

export default RegistrationForm;
