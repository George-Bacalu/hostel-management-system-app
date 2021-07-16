import React, { useState } from "react";
import "./DashboardContent.css";
import VerticallyCenteredModal from "./VerticallyCenteredModal";

function DashboardContent() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="container">
      <section className="booking-section">
        <button className="btn btn-dark room-booking-btn" onClick={() => setModalShow(true)}>
          Book your desired room
        </button>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <VerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default DashboardContent;
