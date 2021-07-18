import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./StudentsData.css";
import TableData from "../components/student-components/TableData";
import VerticallyCenteredModal from "../components/student-components/VerticallyCenteredModal";
//import SelectNrEntries from "./SelectNrEntries";

function StudentContent(props) {
  const [modalShow, setModalShow] = useState(false);
  const history = useHistory();

  async function addStudentDataHandler(entryData) {
    await fetch("https://hostel-management-system-6d309-default-rtdb.firebaseio.com/student-entries.json", {
      method: "POST",
      body: JSON.stringify(entryData),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      history.push("/students-data");
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
        {/* <SelectNrEntries /> */}
        <TableData />
      </div>
    </div>
  );
}

export default StudentContent;
