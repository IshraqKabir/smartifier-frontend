import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  outerContainer: {
    backgroundColor: "white",
    position: "relative",
  },
  polygonBackground: {
    width: "100vw",
    height: 300,
    background:
      "transparent linear-gradient(180deg, #028D9ADE 0%, #8F749CE6 100%) 0% 0% no-repeat padding-box",
    clipPath:
      "polygon(0% 0%, 0% 100%, 15.22% 69.33%, 32.07% 92.67%, 50.33% 70.00%, 60.89% 93%, 74.63% 77.67%, 87.26% 97.33%, 100% 100%, 100% 0%)",
    zIndex: -1,
  },
  container: {
    width: "100vw",
    position: "absolute",
    top: 0,
    left: 0,
    paddingTop: 50,
  },
  titleContainer: {
    color: "white",
    textAlign: "center",
  },
  mainContainer: {
    position: "absolute",
    top: 250,
    left: 0,
    paddingLeft: "5%",
    paddingRight: "5%",
    width: "100%",
  },
  blocks: {
    display: "flex",
    // justifyContent: "stretch",
    alignItems: "center",
    width: "95%",
    flexWrap: "wrap",
    marginLeft: "auto",
    marginRight: "auto",
  },
  block: {
    background: "#FFFFFFDB 0% 0% no-repeat padding-box",
    border: "1px solid #707070",
    borderRadius: 45,
    opacity: 1,
    width: "33%",
    minWidth: 300,
    height: 300,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const Intro: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.outerContainer}>
      <div className={classes.polygonBackground}></div>
      <div className={classes.container}>
        <div className={classes.titleContainer}>
          <Typography variant="h4" component="h1">Smartifier Blog</Typography>
        </div>
      </div>
    </div>
  );
};

export default Intro;
