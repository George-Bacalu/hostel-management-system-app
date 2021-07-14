import React from "react";
import classes from "./HomePageContent.module.css";
import AplicationDescription from "./AplicationDescription";
import Gallery from "./Gallery";
import FeedbackForm from "./FeedbackForm";

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
