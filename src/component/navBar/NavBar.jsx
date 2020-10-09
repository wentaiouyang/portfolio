import React from "react";
import classes from "./NavBar.module.scss";

function NavBar({ handleOpen }) {
  return (
    <div className={classes.container}>
      <div className={classes.name}>WENTAI OUYANG</div>
      <div className={classes.nav_list}>
        <ul>
          <li>WORK</li>
          <li>RESUME</li>
        </ul>
      </div>
      <div>
        <button onClick={handleOpen}>click</button>
      </div>
    </div>
  );
}

export default NavBar;
