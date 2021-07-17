import React, { useState, useEffect } from "react";
import TableBody from "./TableBody";
import "./TableData.css";

function TableData() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedEntries, setLoadedEntries] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://hostel-management-system-6d309-default-rtdb.firebaseio.com/student-entries.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const entries = [];
        for (const key in data) {
          const entry = {
            id: key,
            ...data[key],
          };
          entries.push(entry);
        }
        setIsLoading(false);
        setLoadedEntries(entries);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  } else {
  }

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
        <TableBody entries={loadedEntries} />
      </table>
    </section>
  );
}

export default TableData;
