import React, { useState } from "react";

import "./VerticallyCenteredModal.css";
import Modal from "react-bootstrap/Modal";
import ModalForm from "./ModalForm";

function VerticallyCenteredModal(props) {
  const [inputText, setInputText] = useState({
    studentID: "",
    name: "",
    email: "",
    hostel: "",
    room: "",
  });
  const [entryData, setEntryData] = useState({});

  function handleChange(id, value) {
    setInputText((prevValue) => ({
      ...prevValue,
      [id]: value,
    }));
  }

  function addStudentData() {
    setEntryData({
      studentID: inputText.studentID,
      name: inputText.name,
      email: inputText.email,
      hostel: inputText.hostel,
      room: inputText.room,
    });
  }

  function saveDataAndCloseModal() {
    addStudentData();
    setInputText({
      studentID: "",
      name: "",
      email: "",
      hostel: "",
      room: "",
    });
    props.onHide();
  }

  props.onAddStudentData(entryData);

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className="heading-container">
            <h1 className="heading-first-line">Add student record</h1>
            <h1 className="heading-second-line">Student Info</h1>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ModalForm onChange={handleChange} inputText={inputText} />
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-primary" onClick={props.onHide}>
          Close
        </button>
        <button className="btn btn-dark" onClick={saveDataAndCloseModal}>
          Save entry
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default VerticallyCenteredModal;
