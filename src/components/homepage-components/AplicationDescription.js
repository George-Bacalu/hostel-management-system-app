import React from "react";
import { Link } from "react-router-dom";
import classes from "./AplicationDescription.module.css";
import buttonClass from "./ButtonStyles.module.css";
import hostel_splash_art from "../../images/hostel-splash-art.png";
import { useStateValue } from "../../StateProvider";

function AplicationDescription() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <section className={classes.header_section}>
      <div className={classes.info}>
        <h1 className={classes.heading}>Hostel Management System</h1>
        <p className={classes.description}>
          This application provides a Hostel Management System which helps administrator/warden to manage records perfectly.
          Schools need to manage and record a variety of information covering hostel attendance, disciplinary logs, as well as
          room charge status and many features like Fee Collection, room allotment, room management as categorization of rooms,
          Daily Attendance register of hostel and hostel reports like room left report, charge due reports and receipts, room
          transfer and status report.
        </p>
        {!user && (
          <Link to="/account">
            <button className={buttonClass.btn}>Login into your account</button>
          </Link>
        )}
      </div>
      <div className={classes.info}>
        <img src={hostel_splash_art} alt="splash-art" />
      </div>
    </section>
  );
}

export default AplicationDescription;
