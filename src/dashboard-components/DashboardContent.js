import React, { useState } from "react";
import "./DashboardContent.css";
import BookRoomPopUp from "./BookRoomPopUp";

function DashboardContent() {
  const [isClicked, setIsClicked] = useState(false);

  function clickHandler() {
    setIsClicked(true);
  }

  return (
    <div className="container">
      <section className="booking-section">
        <button onClick={clickHandler} className="btn btn-dark room-booking-btn">
          Book your desired room
        </button>
        {isClicked ? <BookRoomPopUp /> : null}
      </section>
    </div>
  );
}

export default DashboardContent;
