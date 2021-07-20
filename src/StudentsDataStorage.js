import React, { createContext, useState } from "react";

const StudentsDataContext = createContext({
  hostelId: 0,
  studentsEntries: [],
  addStudent: (studentEntry) => {},
  removeStudent: (studentId) => {},
  isStudentAdded: (studentId) => {},
});

function StudentsDataContextProvider(props) {
  const [hostelsDatabases, setHostelsDatabases] = useState([]);
  const [hostelId, setHostelId] = useState(0);

  const context = {
    hostelId: hostelId,
    studentsEntries: hostelsDatabases,
    addStudent: addStudentToDatabasesHandler,
    removeStudent: removeStudentFromDatabaseHandler,
    isStudentAdded: isStudentInDatabasesHandler,
  };

  function addStudentToDatabasesHandler(studentEntry) {
    setHostelsDatabases((prevHostelsDatabases) => {
      return [...prevHostelsDatabases, studentEntry];
    });
  }

  function removeStudentFromDatabaseHandler(studentId) {
    setHostelsDatabases((prevHostelsDatabases) => {
      return prevHostelsDatabases.filter((studentEntry) => {
        return studentEntry.id !== studentId;
      });
    });
  }

  function isStudentInDatabasesHandler(studentId) {
    return hostelsDatabases.some((studentEntry) => {
      return studentEntry.id === studentId;
    });
  }

  return <StudentsDataContext.Provider>{props.children}</StudentsDataContext.Provider>;
}

export default StudentsDataContext;
export { StudentsDataContextProvider };
