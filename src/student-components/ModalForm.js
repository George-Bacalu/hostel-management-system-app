import React from "react";

function ModalForm(props) {
  return (
    <form className="form-layout" id="login-form">
      <div className="form-group text-left">
        <label htmlFor="inputStudentID">Student ID</label>
        <input
          type="text"
          className="form-control"
          id="studentID"
          placeholder="Enter StudentID..."
          value={props.inputText.studentID}
          onChange={props.onModify}
        />
      </div>
      <div className="form-group text-left">
        <label htmlFor="inputName">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter name..."
          value={props.inputText.name}
          onChange={props.onModify}
        />
      </div>
      <div className="form-group text-left">
        <label htmlFor="inputEmail">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email..."
          value={props.inputText.email}
          onChange={props.onModify}
        />
      </div>
      <div className="form-group text-left">
        <label htmlFor="inputHostel">Hostel</label>
        <input
          type="text"
          className="form-control"
          id="hostel"
          placeholder="Enter hostel..."
          value={props.inputText.hostel}
          onChange={props.onModify}
        />
      </div>
      <div className="form-group text-left">
        <label htmlFor="inputRoom">Room</label>
        <input
          type="text"
          className="form-control"
          id="room"
          placeholder="Enter room..."
          value={props.inputText.room}
          onChange={props.onModify}
        />
      </div>
    </form>
  );
}

export default ModalForm;
