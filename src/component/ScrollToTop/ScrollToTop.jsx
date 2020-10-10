import React from "react";
import classes from "./ScrollToTop.module.scss";

function ScrollToTop(props) {
  return (
    <div className={classes.container} onClick={props.handleClick}>
      <img
        className={classes.icon}
        src={require("../../images/top.png")}
        alt="top"
      />
    </div>
  );
}

export default ScrollToTop;
