import classes from "./DetailPage.module.scss"
import React, { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { Carousel } from "react-responsive-carousel"
import "../../carousel.css"

function DetailPage(props) {
  const [currentWork, setCurrentWork] = useState("")
  useEffect(() => {
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
      { id: 2, title: "Swipe Code", img: require("../../images/swp-1.png") },
      {
        id: 3,
        title: "Graphic Design",
        img: require("../../images/grp-1.png"),
      },
    ]
    const currentWork = works.find((work) => {
      return work.id === JSON.parse(props.match.params.id)
    })
    setCurrentWork(currentWork)
  }, [])

  return (
    <div className={classes.container}>
      <div className={classes.banner_overlay}>
        <p>{props.match.params.title}</p>
      </div>
      <div
        className={classes.banner}
        style={{ backgroundImage: `url(${currentWork.img})` }}
      ></div>
      <div className={classes.detail}>
        {JSON.parse(props.match.params.id) === 0 ? (
          <div className={classes.wrapper}>
            <div className={classes.title}>Introduction</div>
            <p>
              website url: <a href="https://spaceit.app">https://spaceit.app</a>
            </p>
            <p>
              SPACE is made for exploring the world around you. Whether if it is
              a shopping mall, an airport or a whole city. Now you can walk into
              a mall or an airport and search for anything as if you entered
              their website. We will guide you to the store selling that SPF30
              cream or the office shoes you wanted. Search anywhere in cities
              for water, bench, art works or a cafe with WiFi. In this Team, I
              worked as React frontend developer.
            </p>
            <div className={classes.title}>Development Tools</div>
            <div className={classes.tech}>
              <img
                className={classes.icon}
                src={require("../../images/react.png")}
                alt=""
              />
              <img
                className={classes.icon}
                src={require("../../images/rest.png")}
                alt=""
              />
              <img
                className={classes.icon}
                src={require("../../images/sass.png")}
                alt=""
              />
            </div>
            <div className={classes.title}>Screenshot</div>
            <div>
              <Carousel
                showArrows={true}
                // onChange={onChange}
                // onClickItem={onClickItem}
                // onClickThumb={onClickThumb}
              >
                <div>
                  <img src={require("../../images/2/-1.png")} />
                  <p className="legend">Desktop-home page</p>
                </div>
                <div>
                  <img src={require("../../images/2/-2.png")} />
                  <p className="legend">Desktop-side bar</p>
                </div>
                <div>
                  <img src={require("../../images/2/-3.png")} />
                  <p className="legend">Desktop-side bar</p>
                </div>
                <div>
                  <img src={require("../../images/2/-4.png")} />
                  <p className="legend">Desktop-side bar</p>
                </div>
                <div>
                  <img src={require("../../images/2/-5.png")} />
                  <p className="legend">Desktop-side bar</p>
                </div>
                <div>
                  <img
                    style={{ width: "250px" }}
                    src={require("../../images/2/1.png")}
                  />
                  <p className="legend">Mobile-home page</p>
                </div>
                <div>
                  <img
                    style={{ width: "250px" }}
                    src={require("../../images/2/2.png")}
                  />
                  <p className="legend">Mobile-side bar</p>
                </div>
                <div>
                  <img
                    style={{ width: "250px" }}
                    src={require("../../images/2/3.png")}
                  />
                  <p className="legend">Mobile-shop search</p>
                </div>
                <div>
                  <img
                    style={{ width: "250px" }}
                    src={require("../../images/2/4.png")}
                  />
                  <p className="legend">Mobile-shop detail page</p>
                </div>
                <div>
                  <img
                    style={{ width: "250px" }}
                    src={require("../../images/2/5.png")}
                  />
                  <p className="legend">Mobile-shopping list</p>
                </div>
                <div>
                  <img
                    style={{ width: "250px" }}
                    src={require("../../images/2/6.png")}
                  />
                  <p className="legend">Mobile-shopping list</p>
                </div>
                <div>
                  <img
                    style={{ width: "250px" }}
                    src={require("../../images/2/7.png")}
                  />
                  <p className="legend">Mobile-profile</p>
                </div>
                <div>
                  <img
                    style={{ width: "250px" }}
                    src={require("../../images/2/8.png")}
                  />
                  <p className="legend">Mobile-login</p>
                </div>
              </Carousel>
            </div>
          </div>
        ) : JSON.parse(props.match.params.id) === 1 ? (
          <div className={classes.wrapper}>
            <div className={classes.title}>Introduction</div>
            <p>
              Our project is about a game-based website called Infinity Travel,
              which is a simple retro game presented in a relatively old pixel
              style, it not only provides people who prefer this kind of game a
              way to entertain, but also brings them a precious memory back to
              the past. Also this application presents the history of Queensland
              by showing players the people and places of Queensland in the
              past, which again reflects the core concept of this game - to show
              our yearn and respect to those memorable times in the past.
            </p>
            <div className={classes.title}>Development Tools</div>
            <div className={classes.tech}>
              <img
                className={classes.icon}
                src={require("../../images/html.png")}
                alt=""
              />
              <img
                className={classes.icon}
                src={require("../../images/js.png")}
                alt=""
              />
              <img
                className={classes.icon}
                src={require("../../images/css.png")}
                alt=""
              />
            </div>
            <div className={classes.title}>Inspiration</div>
            <p>
              As for the inspiration of our project, we generate our ideas from
              the retro games. The pixel style of these games has its special
              charm and attract people from different ages. Particularly, these
              are the games with the style that would bring some people back to
              their childhood or teenagehood, when these simple one-key
              controlled pixel games(only need to push space key to jump) such
              as “Flappy Bird” were very popular. This kind of game is easy for
              players to understand as well as to operate, yet could also be
              challenging and provide as much entertainment.Even with well
              developed technology of today, Google still put this “Dinosaur
              Jump” game on its website for users to play when they were not
              able to access the internet, which again confirm the solid status
              of classic pixel games. The dataset we chose is called “Picture of
              Queensland”, which include the URL of the old photos of
              queensland, the photo descriptions, and latitude and longitude
              coordinates of the photo shooting location, etc. These old photos
              are naturally associated with the theme of time travel. So the
              retro game theme, time-traveling and old photos are combined to
              become the current game site.
            </p>
            <p className={classes.title}>Game introduction</p>
            <div className={classes.video}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=JRWmM6HAJjg"
                className="react-player"
                playing
                width="100%"
                height="100%"
              />
            </div>

            <p className={classes.title}>Gaming</p>
            <p>
              It’s similar to a classic game - flappy bird. Players press space
              button to control the time machine to avoid the barriers floating
              in the space tunnel. Pictures will be popped up and collected to
              the Gallery automatically when player reaches to each 1000 points.
              There are 3 different difficulty levels with different initial
              HP(represented by red “hearts” in the game) of the player and
              moving speed of the obstacles.
            </p>
            <div className={classes.title}>Photo Collection</div>
            <p>
              Gallery is a container of your pictures collection. Players get
              pictures when “game over”. In the Gallery, users can look for
              details of any pictures having been collected. A description of
              each picture will be given here to allow users to learn more.
            </p>
            <p className={classes.title}>Original Concept</p>
            <img
              className={classes.image}
              src={require("../../images/1/sketch.jpeg")}
              alt=""
            />
            <p>
              The picture above shows the original concept ofour website. The
              main feature of the game on the home page is just like "flappy
              bird", and you can control the character by pressing the space
              button. In this game concept, the players should avoid crash with
              the obstacles flying in the air, and when the character knock into
              the obstacles, the game will over and an old photo will pop up.
            </p>
            <p className={classes.title}>Prototype</p>
            <img
              className={classes.image}
              src={require("../../images/1/prototype.png")}
              alt=""
            />
            <p>
              The original prototype is simple, the main interface of the
              website is this game interface. When the game is over, the text of
              "end of the game" will pop up and the old photo will pop up in the
              pop-up window. About how to make this prototype, I used Adobe XD,
              which can simulate the simple interaction of the website.
            </p>
            <p className={classes.title}>Graphic Materials</p>
            <img
              className={classes.image}
              src={require("../../images/1/draw.gif")}
              alt=""
            />
            <p>
              After I decided the main features and the theme of our website, I
              begun to create the graphic materials for our website. Because the
              main visual theme of our website is retro games, in order to
              create this style, the character, background and the obstacles are
              all drawn by ourselves, the tool we used is LZ 8bit pixel painting
              maker , which is a very useful website that can quickly create
              pixel pictures. As for the font style, in order to make it
              correspond to the retro game theme, we chose the "PRESS START 2P"
              font style for all the text on our website.
            </p>
            <div className={classes.group}>
              <img src={require("../../images/1/pixcel.png")} alt="" />
              <img src={require("../../images/1/pixcelboost.png")} alt="" />
              <p>
                These are the pixel images used as the main character of the
                game. This is a time machine, I have drawn two states for it,
                the first is the free fall of the spacecraft, and the second is
                the state of the spacecraft acceleration.
              </p>
            </div>
            <div className={classes.group}>
              <img src={require("../../images/1/camera.png")} alt="" />

              <img src={require("../../images/1/clock.png")} alt="" />

              <p>These pictures are used as the obstacles in the game.</p>
            </div>
            <div className={classes.group}>
              <img src={require("../../images/1/heart.png")} alt="" />
              <img src={require("../../images/1/heartempty.png")} alt="" />
              <p>
                These two pictures are used to represent the player's health.
                The first picture is the status of players when their hp is
                full, and the second picture represent that the player get hurt
                and lose a heart.
              </p>
            </div>
            <p className={classes.title}>Let's have a try!</p>
            <p>
              Game Url:{" "}
              <a href="https://wentaiouyang.github.io/DECO7180-Infinity-Travel/">
                https://wentaiouyang.github.io/DECO7180-Infinity-Travel/
              </a>
            </p>
          </div>
        ) : JSON.parse(props.match.params.id) === 3 ? (
          <div className={classes.wrapper}>
            <p className={classes.title}>Introduction</p>
            <p>
              In this page, I will show my graphic design works, including "Just
              the facts", "InfoGraphic" and some design challenges. "Just the
              facts" are some graphic design practises based on some social
              topics, the "Infographic" is a collection of imagery, charts, and
              minimal text that gives an easy-to-understand overview of a topic,
              and the design challenges are some of my personal works.
            </p>
            <p className={classes.title}>Design Tools</p>
            <div className={classes.tech}>
              <img
                className={classes.icon}
                src={require("../../images/ai.png")}
                alt=""
              />
              <img
                className={classes.icon}
                src={require("../../images/ps.png")}
                alt=""
              />
              <img
                className={classes.icon}
                src={require("../../images/id.png")}
                alt=""
              />
            </div>
            <p className={classes.title}>Graphic Portfolio</p>
            <div>
              <Carousel
                showArrows={true}
                // onChange={onChange}
                // onClickItem={onClickItem}
                // onClickThumb={onClickThumb}
              >
                <div>
                  <img src={require("../../images/3/1.jpg")} />
                </div>
                <div>
                  <img src={require("../../images/3/2.jpg")} />
                </div>
                <div>
                  <img src={require("../../images/3/3.jpg")} />
                </div>
                <div>
                  <img src={require("../../images/3/4.jpg")} />
                </div>
                <div>
                  <img src={require("../../images/3/5.jpg")} />
                </div>
                <div>
                  <img src={require("../../images/3/6.jpg")} />
                </div>
                <div>
                  <img src={require("../../images/3/7.jpg")} />
                </div>
                <div>
                  <img src={require("../../images/3/8.jpg")} />
                </div>
                <div>
                  <img src={require("../../images/3/9.jpg")} />
                </div>
                <div>
                  <img src={require("../../images/3/10.jpg")} />
                </div>
                <div>
                  <img src={require("../../images/3/11.jpg")} />
                </div>
                <div>
                  <img src={require("../../images/3/12.jpg")} />
                </div>
                <div>
                  <img src={require("../../images/3/13.jpg")} />
                </div>
                <div>
                  <img src={require("../../images/3/14.jpg")} />
                </div>
                <div>
                  <img src={require("../../images/3/15.jpg")} />
                </div>
                <div>
                  <img src={require("../../images/3/16.jpg")} />
                </div>
                <div>
                  <img src={require("../../images/3/17.jpg")} />
                </div>
                <div>
                  <img src={require("../../images/3/18.jpg")} />
                </div>
                <div>
                  <img src={require("../../images/3/19.jpg")} />
                </div>
                <div>
                  <img src={require("../../images/3/20.jpg")} />
                </div>
                <div>
                  <img src={require("../../images/3/21.jpg")} />
                </div>
                <div>
                  <img src={require("../../images/3/22.jpg")} />
                </div>
                <div>
                  <img src={require("../../images/3/23.jpg")} />
                </div>
                <div>
                  <img src={require("../../images/3/24.jpg")} />
                </div>
                <div>
                  <img src={require("../../images/3/25.jpg")} />
                </div>
                <div>
                  <img src={require("../../images/3/26.jpg")} />
                </div>
                <div>
                  <img src={require("../../images/3/27.jpg")} />
                </div>
                <div>
                  <img src={require("../../images/3/28.jpg")} />
                </div>
              </Carousel>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default DetailPage
