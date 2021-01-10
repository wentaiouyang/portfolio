import React from "react"
import classes from "./CommingSoon.module.scss"

function CommingSoon() {
  return (
    <div className={classes.container}>
      <div className={classes.title}>Mobile version is coming soon...</div>
      <div>Please check my profile at</div>
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
  )
}

export default CommingSoon
