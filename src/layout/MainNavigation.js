import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import hostel_logo from "../images/hostel-logo.png";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function MainNavigation() {
  const imageStyles = {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
  };

  const [{ user }, dispatch] = useStateValue();

  function handleAuthentication() {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div>
      <header className={classes.header}>
        <Link to="/">
          <div className={classes.logo_image}>
            <img style={imageStyles} src={hostel_logo} alt="logo" />
          </div>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to={!user ? "/account" : "/dashboard"}>Dashboard</Link>
            </li>
            <li>
              <Link to={!user ? "/account" : "/students-data"}>Students</Link>
            </li>
            <li>
              <Link to={!user ? "/account" : "/reports"}>Reports</Link>
            </li>
            <li>
              <Link to={!user && "/account"} onClick={handleAuthentication}>
                <div className={classes.user_message}>
                  <span className={classes.optionLineOne}>{user ? `Hello ${user.email.split("@")[0]}` : "Hello guest"}</span>
                  <span className={classes.optionLineTwo}>{user ? "Sign out" : "Sign in"}</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default MainNavigation;
