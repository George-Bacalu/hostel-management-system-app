import React from "react";
import "./TableRow.css";

function TableRow(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.hostel}</td>
      <td>{props.room}</td>
    </tr>
  );
}

export default TableRow;
