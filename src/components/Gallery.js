import React, { useState } from "react";
import classes from "./Gallery.module.css";
import hostel_rooms1 from "../images/hostel-rooms/hostel-room1.jpg";
import hostel_rooms2 from "../images/hostel-rooms/hostel-room2.jpg";
import hostel_rooms3 from "../images/hostel-rooms/hostel-room3.jpg";
import hostel_rooms4 from "../images/hostel-rooms/hostel-room4.jpg";
import hostel_rooms5 from "../images/hostel-rooms/hostel-room5.jpg";
import hostel_rooms6 from "../images/hostel-rooms/hostel-room6.jpg";
import hostel_rooms7 from "../images/hostel-rooms/hostel-room7.jpg";
import hostel_rooms8 from "../images/hostel-rooms/hostel-room8.jpg";
import hostel_rooms9 from "../images/hostel-rooms/hostel-room9.jpg";

function Gallery() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  function toggleGalleryHandler() {
    setIsButtonClicked((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <section>
      <div className={classes.toggle_gallery}>
        <h1>Check out some of the top rated rooms from our best hostels!</h1>
        <button className={classes.btn} onClick={toggleGalleryHandler}>
          {!isButtonClicked ? "See Gallery" : "Hide Gallery"}
        </button>
      </div>
      {isButtonClicked && (
        <div className={classes.gallery_container}>
          <h1 className={classes.heading}>Gallery</h1>
          <div className={classes.gallery_section}>
            <div className={classes.row}>
              <img className={classes.gallery_image} src={hostel_rooms1} alt="room1" />
              <img className={classes.gallery_image} src={hostel_rooms2} alt="room2" />
              <img className={classes.gallery_image} src={hostel_rooms3} alt="room3" />
            </div>
            <div className={classes.row}>
              <img className={classes.gallery_image} src={hostel_rooms4} alt="room4" />
              <img className={classes.gallery_image} src={hostel_rooms5} alt="room5" />
              <img className={classes.gallery_image} src={hostel_rooms6} alt="room6" />
            </div>
            <div className={classes.row}>
              <img className={classes.gallery_image} src={hostel_rooms7} alt="room7" />
              <img className={classes.gallery_image} src={hostel_rooms8} alt="room8" />
              <img className={classes.gallery_image} src={hostel_rooms9} alt="room9" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
