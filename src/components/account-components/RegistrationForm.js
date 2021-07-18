import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

import "./FormStyles.css";
import FormField from "../FormField";

function RegistrationForm(props) {
  const [inputText, setInputText] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordsMatched, setPasswordsMatched] = useState(true);
  const history = useHistory();

  function handleChange(id, value) {
    setInputText((prevValue) => ({
      ...prevValue,
      [id]: value,
    }));
  }

  function register(event) {
    event.preventDefault();

    if (inputText.password === inputText.confirmPassword) {
      setPasswordsMatched(true);
      auth
        .createUserWithEmailAndPassword(inputText.email, inputText.password)
        .then((auth) => {
          // it successfully created a new user with email and password
          console.log(auth);
          if (auth) {
            history.push("/dashboard");
          }
        })
        .catch((error) => alert(error.message));
    } else {
      setPasswordsMatched(false);
      console.warn("Passwords do not match");
    }

    setInputText({
      fName: "",
      lName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  }

  return (
    <section className="form-container">
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center justify-content-center">
        <header className="btn btn-dark btn-lg btn-block form-heading">REGISTRATION FORM</header>
        <form className="form-layout" id="registration-form">
          <div className="row mb-4 lg-6">
            <div className="col">
              <FormField
                key="fName"
                id="fName"
                outerClasses="form-outline"
                labelScope="inputFName"
                inputName="First Name"
                type="text"
                placeholder="First Name"
                value={inputText.fName}
                onModification={handleChange}
              />
            </div>
            <div className="col">
              <FormField
                key="lName"
                id="lName"
                outerClasses="form-outline"
                labelScope="inputLName"
                inputName="Last Name"
                type="text"
                placeholder="Last Name"
                value={inputText.lName}
                onModification={handleChange}
              />
            </div>
          </div>
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
          <small id="emailHelp" className="form-text text-muted" style={{ marginBottom: "10px" }}>
            We'll never share your email with anyone else.
          </small>
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
          <FormField
            key="confirmPassword"
            id="confirmPassword"
            outerClasses="form-group text-left"
            labelScope="inputConfirmPassword"
            inputName="Confirm Password"
            type="password"
            placeholder="Confirm Password"
            value={inputText.confirmPassword}
            onModification={handleChange}
          />

          {!passwordsMatched && <p style={{ color: "rgb(255, 0, 0)" }}>Passwords do not match!</p>}
          <button type="submit" className="btn btn-dark button-layout" onClick={register}>
            Create your account
          </button>
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
