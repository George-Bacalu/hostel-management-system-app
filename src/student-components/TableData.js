import React from "react";
import TableRow from "./TableRow";

function TableData() {
  const entries = [
    { studentID: "100", name: "George Bacalu", email: "test1@gmail.com", hostel: "Memorandului", room: "134" },
    { studentID: "101", name: "George Bacalu", email: "test2@gmail.com", hostel: "Memorandului", room: "135" },
    { studentID: "102", name: "George Bacalu", email: "test3@gmail.com", hostel: "Memorandului", room: "136" },
    { studentID: "103", name: "George Bacalu", email: "test4@gmail.com", hostel: "Memorandului", room: "137" },
    { studentID: "104", name: "George Bacalu", email: "test5@gmail.com", hostel: "Memorandului", room: "138" },
    { studentID: "105", name: "George Bacalu", email: "test6@gmail.com", hostel: "Memorandului", room: "139" },
    { studentID: "106", name: "George Bacalu", email: "test7@gmail.com", hostel: "Memorandului", room: "140" },
    { studentID: "107", name: "George Bacalu", email: "test8@gmail.com", hostel: "Memorandului", room: "141" },
  ];

  return (
    <section className="table-data">
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Hostel</th>
            <th>Room</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => {
            return (
              <TableRow id={entry.studentID} name={entry.name} email={entry.email} hostel={entry.hostel} room={entry.room} />
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default TableData;
