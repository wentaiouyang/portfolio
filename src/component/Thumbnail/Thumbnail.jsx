import React, { useState } from "react";
import classes from "./Thumbnail.module.scss";

function Thumbnail() {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      id={"case"}
      className={classes.case}
    >
      {console.log(isHover)}
      <div
        className={
          isHover
            ? [classes.active, classes.overlay].join(" ")
            : classes.overlay
        }
      >
        PLACEHOLDER
      </div>
    </div>
  );
}

export default Thumbnail;
