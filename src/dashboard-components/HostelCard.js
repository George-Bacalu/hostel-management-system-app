import React from "react";
import "./HostelCard.css";
import { Link } from "react-router-dom";

function HostelCard(props) {
  return (
    <div className="card-effects" style={{ width: "30%" }}>
      <div className="card-header">
        <h3>{props.title}</h3>
      </div>
      <div className="card-body">
        <h5 className="card-subtitle mb-2 text-secondary">{props.admin}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-text">{props.address}</p>
        <p className="card-text">{props.tel}</p>
        <Link to="students-data">
          <button
            onClick={() => {
              props.onChooseHostel(props.id);
            }}
            className="btn btn-lg btn-block btn-outline-dark"
            type="button"
          >
            Select Hostel
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HostelCard;
