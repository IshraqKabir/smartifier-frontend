import { makeStyles } from "@material-ui/core";
import React from "react";

import Topbar from "../Layout/Topbar/Topbar";
import Hero from "./Hero/Hero";
import Intro from "./Intro/Intro";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    height: 1000,
    backgroundColor: "#022671",
    overflowX: "hidden",
  },
});

const HomeComponent: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <>
      <Topbar />
      <div className={classes.root}>
        <Hero />
        <Intro />
      </div>
    </>
  );
};

export default HomeComponent;
