import React, { useContext } from "react"
import { Context } from "../../Context"
import classes from "./Home.module.scss"
import NavBar from "../../component/NavBar/NavBar"
import { scaleDown as Menu } from "react-burger-menu"
import "./Home.css"
import Thumbnail from "../../component/Thumbnail/Thumbnail"

function Home() {
  const { state } = useContext(Context)
  const { isOpen, setIsOpen } = state

  const works = [
    {
      id: 0,
      title: "Space Platform",
      img: require("../../images/space-1.png"),
    },
    {
      id: 1,
      title: "Infinity Travel",
      img: require("../../images/infi-1.png"),
    },
    { id: 1, title: "haha" },
    // { id: 1, title: "haha" },
  ]

  return (
    <div
      className={classes.container}
      style={isOpen ? { overflowY: "hidden" } : { overflowY: "auto" }}
    >
      <Menu
        // noOverlay={true}
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
              <p className={classes.icon_text}>LINKEDIN</p>
            </div>
            <div>
              <img
                className={classes.icon}
                src={require("../../images/Facebook.png")}
                alt="Facebook"
              />
              <p className={classes.icon_text}>FACEBOOK</p>
            </div>
            <div>
              <img
                className={classes.icon}
                src={require("../../images/Github.png")}
                alt="Github"
              />
              <p className={classes.icon_text}>GITHUB</p>
            </div>
          </div>
        </div>
      </Menu>
      <div id={"page-wrap"} className={classes.nav_wrapper}>
        <NavBar
          isOpen={isOpen}
          handleOpen={() => {
            setIsOpen(!isOpen)
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
          <img
            className={classes.spaceship}
            src={require("../../images/pixcelboost.png")}
            alt=""
          />
        </div>
        <div className={classes.Thumbnail}>
          <div className={classes.thum_wrapper}>
            {works.map((work, i) => {
              return <Thumbnail key={i} text={work.title} img={work.img} />
            })}
            {works.map(() => {
              return <i></i>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
