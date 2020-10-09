import React from "react";
import classes from "./NavBar.module.scss";

function NavBar() {
  return (
    <div className={classes.container}>
      <div className={classes.name}>WENTAI OUYANG</div>
      <div className={classes.nav_list}>
        <ul>
          <li>WORK</li>
          <li>RESUME</li>
        </ul>
      </div>
      <div></div>
    </div>
  );
}

export default NavBar;
