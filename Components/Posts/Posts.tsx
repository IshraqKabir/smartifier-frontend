import classes from "*.module.css";
import { makeStyles } from "@material-ui/core";
import React from "react";
import Topbar from "../Layout/Topbar/Topbar";
import Intro from "./Intro/Intro";

const useStyles = makeStyles({
  pageContainer: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#022671",
    overflowX: "hidden",
  },
});

const Posts = ({ posts }) => {
  const classes = useStyles();

  return (
    <div className={classes.pageContainer}>
      <Topbar />
      <Intro />
    </div>
  );
};

export default Posts;
