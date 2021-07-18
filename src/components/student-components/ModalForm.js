import React from "react";
import FormField from "../FormField";

function ModalForm(props) {
  return (
    <form className="form-layout" id="add-student-form">
      <FormField
        key="studentID"
        id="studentID"
        outerClasses="form-group text-left"
        labelScope="inputStudentID"
        inputName="Student ID"
        type="text"
        placeholder="Enter studentID"
        value={props.inputText.studentID}
        onModification={props.onChange}
      />
      <FormField
        key="name"
        id="name"
        outerClasses="form-group text-left"
        labelScope="inputName"
        inputName="Name"
        type="text"
        placeholder="Enter name"
        value={props.inputText.name}
        onModification={props.onChange}
      />
      <FormField
        key="email"
        id="email"
        outerClasses="form-group text-left"
        labelScope="inputEmail"
        inputName="Email address"
        type="email"
        placeholder="Enter email"
        value={props.inputText.email}
        onModification={props.onChange}
      />
      <FormField
        key="hostel"
        id="hostel"
        outerClasses="form-group text-left"
        labelScope="inputHostel"
        inputName="Hostel"
        type="text"
        placeholder="Enter hostel"
        value={props.inputText.hostel}
        onModification={props.onChange}
      />
      <FormField
        key="room"
        id="room"
        outerClasses="form-group text-left"
        labelScope="inputRoom"
        inputName="Room"
        type="text"
        placeholder="Enter room"
        value={props.inputText.room}
        onModification={props.onChange}
      />
    </form>
  );
}

export default ModalForm;
