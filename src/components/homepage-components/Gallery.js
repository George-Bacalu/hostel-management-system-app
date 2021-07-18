import React, { useState } from "react";
import classes from "./Gallery.module.css";
import buttonClass from "./ButtonStyles.module.css";
import hostel_room1 from "../../images/hostel-rooms/hostel-room1.jpg";
import hostel_room2 from "../../images/hostel-rooms/hostel-room2.jpg";
import hostel_room3 from "../../images/hostel-rooms/hostel-room3.jpg";
import hostel_room4 from "../../images/hostel-rooms/hostel-room4.jpg";
import hostel_room5 from "../../images/hostel-rooms/hostel-room5.jpg";
import hostel_room6 from "../../images/hostel-rooms/hostel-room6.jpg";
import hostel_room7 from "../../images/hostel-rooms/hostel-room7.jpg";
import hostel_room8 from "../../images/hostel-rooms/hostel-room8.jpg";
import hostel_room9 from "../../images/hostel-rooms/hostel-room9.jpg";
import GalleryImage from "./GalleryImage";

function Gallery() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  /*
  const images = [
    {
      id: "1",
      src: "../../images/hostel-rooms/hostel-room1.jpg",
      alt: "room1",
    },
    {
      id: "2",
      src: "../../images/hostel-rooms/hostel-room2.jpg",
      alt: "room2",
    },
    {
      id: "3",
      src: "../../images/hostel-rooms/hostel-room3.jpg",
      alt: "room3",
    },
    {
      id: "4",
      src: "../../images/hostel-rooms/hostel-room4.jpg",
      alt: "room4",
    },
    {
      id: "5",
      src: "../../images/hostel-rooms/hostel-room5.jpg",
      alt: "room5",
    },
    {
      id: "6",
      src: "../../images/hostel-rooms/hostel-room6.jpg",
      alt: "room6",
    },
    {
      id: "7",
      src: "../../images/hostel-rooms/hostel-room7.jpg",
      alt: "room7",
    },
    {
      id: "8",
      src: "../../images/hostel-rooms/hostel-room8.jpg",
      alt: "room8",
    },
    {
      id: "9",
      src: "../../images/hostel-rooms/hostel-room9.jpg",
      alt: "room9",
    },
  ];
  */

  function toggleGalleryHandler() {
    setIsButtonClicked((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <section>
      <div className={classes.section_heading}>
        <h1>Check out some of the top rated rooms from our best hostels!</h1>
        <button className={buttonClass.btn} onClick={toggleGalleryHandler}>
          {!isButtonClicked ? "See Gallery" : "Hide Gallery"}
        </button>
      </div>
      {isButtonClicked && (
        <div className={classes.gallery_container}>
          <h1>Gallery</h1>
          <div className={classes.images_container}>
            <GalleryImage src={hostel_room1} alt="room1" />
            <GalleryImage src={hostel_room2} alt="room2" />
            <GalleryImage src={hostel_room3} alt="room3" />
            <GalleryImage src={hostel_room4} alt="room4" />
            <GalleryImage src={hostel_room5} alt="room5" />
            <GalleryImage src={hostel_room6} alt="room6" />
            <GalleryImage src={hostel_room7} alt="room7" />
            <GalleryImage src={hostel_room8} alt="room8" />
            <GalleryImage src={hostel_room9} alt="room9" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
