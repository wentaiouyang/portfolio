import React, { useState } from "react";
import classes from "./Home.module.scss";
import NavBar from "../../component/NavBar/NavBar";
import { scaleDown as Menu } from "react-burger-menu";
import "./Home.css";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.container}>
      {console.log(isOpen)}
      <Menu
        customCrossIcon={<img src={require("../../images/Close.png")} />}
        outerContainerId={"App"}
        pageWrapId={"page-wrap"}
        disableAutoFocus
        right
        burgerButtonClassName={classes.burgerIcon}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className={classes.sideBar}>fdsafklsadfjks</div>
      </Menu>
      <div id={"page-wrap"}>
        <NavBar isOpen={isOpen} handleOpen={handleOpen} />
        <div className={classes.welcome_text}>
          <p className={classes.title}>
            Hi there!{" "}
            <img
              className={classes.hand}
              src={require("../../images/hand.png")}
            />
            <br />
            This is Owen's Portfolio{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
