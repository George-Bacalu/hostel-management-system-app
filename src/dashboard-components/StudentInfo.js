import React, { useState } from "react";
import "./StudentInfo.css";

function StudentInfo() {
  const [inputText, setInputText] = useState({
    studentID: "",
    name: "",
    email: "",
    hostel: "",
    room: "",
  });

  function handleChange(event) {
    const { id, value } = event.target;
    setInputText((prevValue) => ({
      ...prevValue,
      [id]: value,
    }));
  }

  return (
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
  );
}

export default StudentInfo;
