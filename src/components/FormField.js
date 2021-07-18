import React from "react";

function FormField(props) {
  return (
    <div className={props.outerClasses}>
      <label htmlFor={props.labelScope}>{props.inputName}</label>
      <input
        type={props.type}
        id={props.id}
        className="form-control"
        placeholder={props.placeholder}
        value={props.value}
        onChange={(event) => {
          const { id, value } = event.target;
          props.onModification(id, value);
        }}
      />
    </div>
  );
}

export default FormField;
