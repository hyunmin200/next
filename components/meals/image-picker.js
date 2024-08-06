"use client";

import { useRef } from "react";
import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const imageInputRef = useRef();

  const handPickClick = () => {
    imageInputRef.current.click();
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
        />
        <button className={classes.button} type="button" onClick={handPickClick}>
          Pick and Image
        </button>
      </div>
    </div>
  );
}
