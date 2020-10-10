import React, { useContext } from "react";
import { Context } from "../../Context";
import classes from "./Home.module.scss";
import NavBar from "../../component/NavBar/NavBar";
import { scaleDown as Menu } from "react-burger-menu";
import "./Home.css";

function Home() {
  const { state } = useContext(Context);
  const { isOpen, setIsOpen } = state;
  return (
    <div className={classes.container}>
      <Menu
        noOverlay={true}
        customCrossIcon={<img src={require("../../images/Close.png")} />}
        outerContainerId={"App"}
        pageWrapId={"page-wrap"}
        disableAutoFocus
        right
        burgerButtonClassName={classes.burgerIcon}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className={classes.sideBar}>
          <div className={classes.name}>WENTAI OUYANG</div>
          <div className={classes.text}>
            Get in touch if you want to chat about design or just simply want to
            say HI!
          </div>
          <div className={classes.icon_container}>
            <div>
              <img
                className={classes.icon}
                src={require("../../images/Linkedin.png")}
                alt="Linkedin"
              />
              <p className={classes.icon_text}>Linkedin</p>
            </div>
            <div>
              <img
                className={classes.icon}
                src={require("../../images/Facebook.png")}
                alt="Facebook"
              />
              <p className={classes.icon_text}>Facebook</p>
            </div>
            <div>
              <img
                className={classes.icon}
                src={require("../../images/Github.png")}
                alt="Github"
              />
              <p className={classes.icon_text}>Github</p>
            </div>
          </div>
        </div>
      </Menu>
      <div id={"page-wrap"} className={classes.nav_wrapper}>
        <NavBar
          isOpen={isOpen}
          handleOpen={() => {
            setIsOpen(!isOpen);
          }}
        />
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
