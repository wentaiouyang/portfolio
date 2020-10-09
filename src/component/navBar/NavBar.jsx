import React from "react";
import classes from "./NavBar.module.scss";

function NavBar({ isOpen, handleOpen }) {
  return (
    <div className={classes.container}>
      <div className={classes.name}>WENTAI OUYANG</div>
      <div className={classes.nav_list}>
        <ul>
          <li>WORK</li>
          <li>RESUME</li>
        </ul>
      </div>
      <div className={classes.burger}>
        {!isOpen && (
          <img
            className={classes.burgerBtn}
            onClick={handleOpen}
            src={require("../../images/Burger_Menu.png")}
            alt="burger"
          />
        )}
      </div>
    </div>
  );
}

export default NavBar;
