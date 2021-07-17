import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./VerticallyCenteredModal.css";

function VerticallyCenteredModal(props) {
  const [inputText, setInputText] = useState({
    studentID: "",
    name: "",
    email: "",
    hostel: "",
    room: "",
  });
  const [entryData, setEntryData] = useState({});

  function handleChange(event) {
    const { id, value } = event.target;
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
            <div className="heading">
              <h1 className="heading-text">Add student record</h1>
            </div>
            <h1 className="title">Student Info</h1>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="form-layout" id="login-form">
          <div className="form-group text-left">
            <label htmlFor="inputStudentID">Student ID</label>
            <input
              type="text"
              className="form-control"
              id="studentID"
              placeholder="Enter StudentID..."
              value={inputText.studentID}
              onChange={handleChange}
            />
          </div>
          <div className="form-group text-left">
            <label htmlFor="inputName">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name..."
              value={inputText.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group text-left">
            <label htmlFor="inputEmail">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email..."
              value={inputText.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group text-left">
            <label htmlFor="inputHostel">Hostel</label>
            <input
              type="text"
              className="form-control"
              id="hostel"
              s
              placeholder="Enter hostel..."
              value={inputText.hostel}
              onChange={handleChange}
            />
          </div>
          <div className="form-group text-left">
            <label htmlFor="inputRoom">Room</label>
            <input
              type="text"
              className="form-control"
              id="room"
              placeholder="Enter room..."
              value={inputText.room}
              onChange={handleChange}
            />
          </div>
        </form>
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
