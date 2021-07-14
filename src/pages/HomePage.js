import React from "react";
import MainNavigation from "../layout/MainNavigation";
import HomePageContent from "../components/HomePageContent";
import MainFooter from "../layout/MainFooter";

function HomePage() {
  return (
    <div>
      <MainNavigation />
      <HomePageContent />
      <MainFooter />
    </div>
  );
}

export default HomePage;
