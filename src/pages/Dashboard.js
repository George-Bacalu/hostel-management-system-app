import React from "react";
import MainNavigation from "../layout/MainNavigation";
import MainFooter from "../layout/MainFooter";
import DashboardContent from "../dashboard-components/DashboardContent";

function Dashboard() {
  return (
    <div>
      <MainNavigation />
      <DashboardContent />
      <MainFooter />
    </div>
  );
}

export default Dashboard;
