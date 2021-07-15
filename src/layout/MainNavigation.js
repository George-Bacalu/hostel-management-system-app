import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import hostel_logo from "../images/hostel-logo.png";

function MainNavigation() {
  const imageStyles = {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
  };

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
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/reports">Reports</Link>
            </li>
            <li>
              <Link to="/students-data">Students</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default MainNavigation;
