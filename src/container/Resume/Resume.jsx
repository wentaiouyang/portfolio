import React, { useContext, useState } from "react";
import classes from "./Resume.module.scss";
import { Context } from "../../Context";
import NavBar from "../../component/NavBar/NavBar";
import { scaleDown as Menu } from "react-burger-menu";
import ScrollToTop from "../../component/ScrollToTop/ScrollToTop";
import { CSSTransition } from "react-transition-group";
import "./Resume.css";

function Resume() {
  const { state } = useContext(Context);
  const { isOpen, setIsOpen } = state;
  const [isScroll, setIsScroll] = useState(false);

  const handleClick = () => {
    document.getElementById("container").scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    console.log(document.body);
  };

  return (
    <div
      id="container"
      className={classes.container}
      style={isOpen ? { overflowY: "hidden" } : { overflowY: "scroll" }}
      onScroll={() => {
        if (document.getElementById("container").scrollTop === 0) {
          setIsScroll(false);
        } else {
          setIsScroll(true);
        }
      }}
    >
      <Menu
        // noOverlay={true}
        customCrossIcon={<img src={require("../../images/Close.png")} />}
        outerContainerId={"App"}
        pageWrapId={"page"}
        disableAutoFocus={true}
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
              <a
                className={classes.mediaLink}
                target={"_blank"}
                href={"https://www.linkedin.com/in/wentai-ouyang-621613171/"}
              >
                <p className={classes.icon_text}>LINKEDIN</p>
              </a>
            </div>
            <div>
              <img
                className={classes.icon}
                src={require("../../images/Facebook.png")}
                alt="Facebook"
              />
              <a
                className={classes.mediaLink}
                target={"_blank"}
                href={"https://www.facebook.com/wentai.ouyang/"}
              >
                <p className={classes.icon_text}>FACEBOOK</p>
              </a>
            </div>
            <div>
              <img
                className={classes.icon}
                src={require("../../images/Github.png")}
                alt="Github"
              />
              <a
                className={classes.mediaLink}
                target={"_blank"}
                href={"https://github.com/wentaiouyang"}
              >
                <p className={classes.icon_text}>GITHUB</p>
              </a>
            </div>
          </div>
        </div>
      </Menu>
      <div className={classes.content} id={"page"}>
        <NavBar />
        <div className={classes.banner}>
          <p className={classes.title}>About Me</p>
        </div>
        <div className={classes.selfIntro}>
          Wentai Ouyang is a front-end develop with UI&UX design background, I
          have participated in a number of projects and internships, in which he
          played an important role of developer and designer. he believes in
          designing inclusive and engaging experiences that empower people. He
          is currently graduate from the master of interaction design in the
          University of Queensland.
        </div>
        <div className={classes.title_wrapper}>
          <div className={classes.resume_title}>RESUME</div>
        </div>
        <img
          onClick={handleClick}
          className={classes.resume}
          src={require("../../images/resume 1.jpg")}
          alt=""
        />
        <img
          className={classes.resume}
          src={require("../../images/resume.jpg")}
          alt=""
        />
        <div className={classes.download}>
          <img src={require("../../images/download.png")} alt="download" />
          <a
            href="https://drive.google.com/uc?export=download&id=1Zh_cGvjd3rSAjN4lrAM0VXN_Fy4y9y_P"
            download="resume.pdf"
          >
            resume.pdf
          </a>
        </div>
        <div className={classes.download}>
          <img src={require("../../images/Linkedin.png")} alt="Linkedin" />
          <a href="https://www.linkedin.com/in/wentai-ouyang-621613171/">
            Linkedin
          </a>
        </div>
      </div>
      <CSSTransition
        classNames="fade"
        in={isScroll}
        timeout={300}
        unmountOnExit
        onEnter={() => setIsScroll(true)}
        onExited={() => setIsScroll(false)}
      >
        <div>
          <ScrollToTop handleClick={handleClick} />
        </div>
      </CSSTransition>
      {/* {isScroll && <ScrollToTop handleClick={handleClick} />} */}
    </div>
  );
}

export default Resume;
