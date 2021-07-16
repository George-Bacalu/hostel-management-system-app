import React, { useState } from "react";
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

  const [activeCamps, setActiveCamps] = useState({
    dashboard: false,
    studentsData: false,
    reports: false,
    account: false,
  });

  function clickHandler(event) {
    const { name, value } = event.target;
    setActiveCamps((prevValue) => {
      if (name === "dashboard") {
        return {
          dashboard: value,
          studentsData: prevValue.studentsData,
          reports: prevValue.reports,
          account: prevValue.account,
        };
      } else if (name === "students-data") {
        return {
          dashboard: prevValue.dashboard,
          studentsData: value,
          reports: prevValue.reports,
          account: prevValue.account,
        };
      } else if (name === "students-data") {
        return {
          dashboard: prevValue.dashboard,
          studentsData: prevValue.studentsData,
          reports: value,
          account: prevValue.account,
        };
      } else if (name === "students-data") {
        return {
          dashboard: prevValue.dashboard,
          studentsData: prevValue.studentsData,
          reports: prevValue.reports,
          account: value,
        };
      }
    });
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
              <Link
                style={activeCamps.dashboard ? { color: "#fff" } : null}
                onClick={clickHandler}
                to="/dashboard"
                value={!activeCamps.dashboard}
                name="dashboard"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                style={activeCamps.studentsData ? { color: "#fff" } : null}
                onClick={clickHandler}
                to="/students-data"
                value={!activeCamps.studentsData}
                name="students-data"
              >
                Students
              </Link>
            </li>
            <li>
              <Link
                style={activeCamps.reports ? { color: "#fff" } : null}
                onClick={clickHandler}
                to="/reports"
                value={!activeCamps.reports}
                name="reports"
              >
                Reports
              </Link>
            </li>
            <li>
              <Link
                style={activeCamps.account ? { color: "#fff" } : null}
                onClick={clickHandler}
                to="/account"
                value={!activeCamps.account}
                name="account"
              >
                Account
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default MainNavigation;
