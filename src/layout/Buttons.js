import React from "react";
import classes from "./Buttons.module.css";

function Buttons(props) {
  return <button className={classes.btn}>{props.children}</button>;
}

export default Buttons;
