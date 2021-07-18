import React from "react";
import classes from "./GalleryImage.module.css";

function GalleryImage(props) {
  return <img className={classes.gallery_image} src={props.src} alt={props.alt} />;
}

export default GalleryImage;
