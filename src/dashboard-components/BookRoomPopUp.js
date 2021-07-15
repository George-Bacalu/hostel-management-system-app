import React, { useState } from "react";
import "./BookRoomPopUp.css";

function BookRoomPopUp() {
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

    return (
      <div>
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
        </form>
      </div>
    );
  }
}

export default BookRoomPopUp;
