import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

import Image from "next/image";

const useStyles = makeStyles({
  root: {
    position: "relative",
    width: "100vw",
    // paddingTop: 250,
    padding: "5%",
    color: "white",
    background:
      "transparent linear-gradient(180deg, #000266 0%, #032C73 57%, #00163B 100%, #003A67 100%) 0% 0% no-repeat padding-box",
    ["@media (max-width: 880px)"] : {
      height: 1000,
    }
  },
  description: {
    marginTop: 50,
    fontSize: "small",
  },
  buttons: {
    marginTop: 40,
    display: "flex",
  },
  button: {
    background: "#0380A7 0% 0% no-repeat padding-box",
    padding: "10px 40px 10px 40px",
    marginRight: 20,
    borderRadius: 50,
    fontSize: "small",
  },
  youtubeButtonsContainer: {
    display: "flex",
    width: "65%",
    fontSize: "large",
  },
  youtubeLogo: {
    marginRight: 20,
    marginLeft: -25,
    display: "flex",
    alignItems: "center",
  },
  awe: {
    position: "absolute",
    top: "15%",
    right: "20%",
    ["@media (max-width: 600px)"]: {
      display: "none",
    },
  },
});

const useContentStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "40%",
  },
});

const Hero: React.FC<{}> = () => {
  const classes = useStyles();
  const contentStyles = useContentStyles();

  return (
    <div className={classes.root}>
      <div className={contentStyles.root}>
        <Typography component="h1" variant="h3">
          Why{" "}
          <span style={{ color: "#5AB4E2", fontWeight: "bold" }}>
            Smartifier
          </span>
        </Typography>
        <div className={classes.description}>
          <Typography component="h2" variant="subtitle1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nihil
            eum totam aspernatur voluptate, molestiae expedita aliquid dolores
            explicabo quae rerum, alias minima obcaecati nostrum maxime dolorum.
            Iusto harum cumque aut exercitationem velit impedit vel alias iste
            accusamus laudantium vero eum rerum, ex culpa, perspiciatis quis
            ipsa atque, earum quisquam.
          </Typography>
        </div>
        <div className={classes.buttons}>
          <div className={classes.button}>Talk to us</div>
          <div className={classes.button}>All Courses</div>
        </div>
        <div
          className={`${classes.youtubeButtonsContainer} ${classes.buttons} ${classes.button}`}
        >
          <div className={classes.youtubeLogo}>
            <Image
              src="/assets/small_youtube_logo.png"
              width={29}
              height={21}
            />
          </div>
          <Typography variant="caption">
            Find free video tutorials on YouTube
          </Typography>
        </div>
      </div>
      <div className={classes.awe}>
        <Image src="/assets/awe.png" width={400} height={400} />
      </div>
    </div>
  );
};

export default Hero;
