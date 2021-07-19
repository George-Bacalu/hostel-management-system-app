import React, { useState } from "react";
import classes from "./Gallery.module.css";
import buttonClass from "./ButtonStyles.module.css";
import GalleryImage from "./GalleryImage";

function Gallery() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  function toggleGalleryHandler() {
    setIsButtonClicked((prevValue) => {
      return !prevValue;
    });
  }

  /* ---------- images importing ------------- */

  function importAll(folder) {
    let images = {};
    folder.keys().map((item, index) => {
      images[item.replace("./", "")] = folder(item);
    });
    return images;
  }

  const images = importAll(require.context("../../images/hostel-rooms/", false, /\.(png|jpe?g|svg)$/));
  const roomImages = [];
  for (let index = 0; index < 9; index++) {
    const roomImage = images[`hostel-room${index + 1}.jpg`].default;
    roomImages.push(roomImage);
  }

  /* --------------   ----------------- */

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
            {roomImages.map((roomImage, index) => {
              return <GalleryImage key={index} src={roomImage} alt={`room${index + 1}`} />;
            })}
            ;
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
