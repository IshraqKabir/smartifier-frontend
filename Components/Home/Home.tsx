import { makeStyles } from "@material-ui/core";
import React from "react";

import Topbar from "../Layout/Topbar/Topbar";
import Hero from "./Hero/Hero";
import Intro from "./Intro/Intro";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#022671",
    overflowX: "hidden",
  },
});

const HomeComponent: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Topbar />
      <Hero />
      <Intro />
    </div>
  );
};

export default HomeComponent;
