import React, { useState } from "react";
import classes from "./Home.module.scss";
import NavBar from "../../component/NavBar/NavBar";
import { slide as Menu } from "react-burger-menu";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {console.log(isOpen)}
      <Menu
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
        <NavBar handleOpen={handleOpen} />
        <p>Hi there! This is Owen's Portfolio </p>
      </div>
    </div>
  );
}

export default Home;
