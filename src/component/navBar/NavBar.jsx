import React, { useContext } from "react";
import classes from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";
import { Context } from "../../Context";

function NavBar() {
  const { state } = useContext(Context);
  const { isOpen, setIsOpen } = state;

  return (
    <div className={classes.container}>
      <div className={classes.name}>WENTAI OUYANG</div>
      <div className={classes.nav_list}>
        <ul>
          <NavLink
            to={"/work"}
            activeStyle={{
              color: "rgb(26 193 123)",
              fontWeight: "bold",
            }}
          >
            <li className={classes.link}>WORK</li>
          </NavLink>
          <NavLink
            to={"/resume"}
            activeStyle={{
              color: "rgb(26 193 123)",
              fontWeight: "bold",
            }}
          >
            <li className={classes.link}>RESUME</li>
          </NavLink>
        </ul>
      </div>
      <div className={classes.burger}>
        {console.log(isOpen)}
        {!isOpen && (
          <img
            className={classes.burgerBtn}
            onClick={() => {
              console.log("naj");
              setIsOpen(true);
            }}
            src={require("../../images/Burger_Menu.png")}
            alt="burger"
          />
        )}
      </div>
    </div>
  );
}

export default NavBar;
