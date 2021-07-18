import React, { createContext } from "react";

const StudentsDataContext = createContext({
  databases: {},
});

function StudentsDataContextProvider() {
  return <StudentsDataContext.Provider></StudentsDataContext.Provider>;
}

export default StudentsDataContext;
