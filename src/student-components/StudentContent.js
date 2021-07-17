import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TableData from "./TableData";
import "./StudentContent.css";
import VerticallyCenteredModal from "./VerticallyCenteredModal";

function StudentContent() {
  const [modalShow, setModalShow] = useState(false);
  const history = useHistory();

  function addStudentDataHandler(entryData) {
    fetch("https://hostel-management-system-6d309-default-rtdb.firebaseio.com/student-entries.json", {
      method: "POST",
      body: JSON.stringify(entryData),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      history.replace("/students-data");
    });
  }

  return (
    <div>
      <div className="container">
        <section className="booking-section">
          <button className="btn btn-dark room-booking-btn" onClick={() => setModalShow(true)}>
            Add a student record
          </button>
        </section>
        <VerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} onAddStudentData={addStudentDataHandler} />
      </div>
      <div className="container">
        <div className="entries-row">
          <label for="entries-selection">Show:</label>
          <select className="selection-layout" id="entries-selection" name="entries-selection">
            <option value="1">1</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <label for="entries-selection">entries</label>
        </div>
        <TableData />
      </div>
    </div>
  );
}

export default StudentContent;
