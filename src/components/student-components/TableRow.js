import React from "react";

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
