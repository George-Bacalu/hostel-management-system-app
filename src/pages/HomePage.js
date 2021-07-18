import React from "react";
import classes from "./HomePage.module.css";
import AplicationDescription from "../components/homepage-components/AplicationDescription";
import Gallery from "../components/homepage-components/Gallery";
import FeedbackForm from "../components/homepage-components/FeedbackForm";

function HomePageContent() {
  return (
    <div className={classes.container}>
      <AplicationDescription />
      <Gallery />
      <FeedbackForm />
    </div>
  );
}

export default HomePageContent;
