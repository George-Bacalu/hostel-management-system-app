import React from "react";
import TableRow from "./TableRow";

function TableBody(props) {
  return (
    <tbody>
      {props.entries.map((entry) => (
        <TableRow
          key={entry.studentID}
          id={entry.studentID}
          name={entry.name}
          email={entry.email}
          hostel={entry.hostel}
          room={entry.room}
        />
      ))}
    </tbody>
  );
}

export default TableBody;
