import React, { useState } from "react"
import classes from "./Thumbnail.module.scss"
import { useHistory } from "react-router-dom"

function Thumbnail({ text, img, id }) {
  const history = useHistory()
  const [isHover, setIsHover] = useState(false)
  const redirectTo = (path) => {
    history.push(path)
  }
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
      onClick={() => {
        redirectTo(`/detail/${text}/${id}`)
      }}
    >
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
