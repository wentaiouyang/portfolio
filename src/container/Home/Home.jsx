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
    // { id: 2, title: "Swipe Code", img: require("../../images/swp-1.png") },
    { id: 3, title: "Graphic Design", img: require("../../images/grp-1.png") },
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
              <a href="https://www.linkedin.com/in/wentai-ouyang-621613171/">
                <p className={classes.icon_text}>LINKEDIN</p>
              </a>
            </div>
            <div>
              <img
                className={classes.icon}
                src={require("../../images/Facebook.png")}
                alt="Facebook"
              />
              <a href="https://www.facebook.com/wentai.ouyang">
                <p className={classes.icon_text}>FACEBOOK</p>
              </a>
            </div>
            <div>
              <img
                className={classes.icon}
                src={require("../../images/Github.png")}
                alt="Github"
              />
              <a href="https://github.com/wentaiouyang">
                <p className={classes.icon_text}>GITHUB</p>
              </a>
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
              return (
                <Thumbnail
                  key={i}
                  text={work.title}
                  img={work.img}
                  id={work.id}
                />
              )
            })}
            {works.map((work, i) => {
              return <i key={i}></i>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
