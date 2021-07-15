import React from "react";
import MainNavigation from "../layout/MainNavigation";
import MainFooter from "../layout/MainFooter";
import StudentContent from "../student-components/StudentContent";

function StudentsData() {
  return (
    <div>
      <MainNavigation />
      <StudentContent />
      <MainFooter />
    </div>
  );
}

export default StudentsData;
