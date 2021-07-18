import React from "react";
import "./FormHeader.css";

function FormHeader(props) {
  return (
    <header>
      <div className="btn btn-dark btn-lg btn-block">{props.message}</div>
    </header>
  );
}

export default FormHeader;
