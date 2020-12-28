import React, { useState } from "react"
import classes from "./Thumbnail.module.scss"

function Thumbnail({ text, img }) {
  const [isHover, setIsHover] = useState(false)
  return (
    <div
      onMouseOver={() => {
        setIsHover(true)
      }}
      onMouseLeave={() => {
        setIsHover(false)
      }}
      id={"case"}
      className={classes.case}
      style={
        img
          ? {
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }
          : { backgroundColor: "black" }
      }
    >
      {console.log(isHover)}
      <div
        className={
          isHover
            ? [classes.active, classes.overlay].join(" ")
            : classes.overlay
        }
      >
        {text}
      </div>
    </div>
  )
}

export default Thumbnail
