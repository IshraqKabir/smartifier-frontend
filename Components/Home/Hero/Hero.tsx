import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

import Image from "next/image";

import texts from "../../../texts/frontpage";
import links from "../../../texts/links";

const useStyles = makeStyles({
  root: {
    color: "white",
    display: "flex",
    alignItems: "center",
    padding: "2rem 2rem 10rem 0rem",
    justifyContent: "center",
    background:
      "transparent linear-gradient(180deg, #000266 0%, #032C73 57%, #00163B 100%, #003A67 100%) 0% 0% no-repeat padding-box",
    ["@media (max-width: 880px)"]: {
      padding: "5rem 2rem 5rem 1rem",
    },
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
    whiteSpace: "nowrap",
    overflow: "hidden",
    ["@media (max-width: 880px)"]: {
      width: "80%",
    },
  },
  youtubeLogo: {
    marginRight: 20,
    marginLeft: -25,
    display: "flex",
    alignItems: "center",
  },
  awe: {
    ["@media (max-width: 600px)"]: {
      display: "none",
    },
  },
});

const useContentStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "80ch",
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
          {texts.why_smartifier_array.map((line) => {
            return (
              <Typography component="h2" variant="subtitle1">
                {line}
              </Typography>
            );
          })}
        </div>
        <div className={classes.buttons}>
          <a
            href="mailto:smartifier.ac@gmail.com"
            style={{ color: "white", textDecoration: "none" }}
          >
            <div className={classes.button}>Talk to us</div>
          </a>
          {/* <div className={classes.button}>All Courses</div> */}
        </div>
        <a
          href={links.youtube}
          target="_blank"
          style={{ color: "white", textDecoration: "none" }}
        >
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
        </a>
      </div>
      <div className={classes.awe}>
        <Image src="/assets/awe.png" width={400} height={400} />
        {/* <Image src="/assets/IMG_2093.JPG" width={400} height={400} /> */}
      </div>
    </div>
  );
};

export default Hero;
