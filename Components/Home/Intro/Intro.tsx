import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  outerContainer: {
    width: "100vw",
    height: 1000,
    backgroundColor: "#01176C",
    position: "relative",
  },
  polygonBackground: {
    width: "100vw",
    height: 411,
    background:
      "transparent linear-gradient(180deg, #028D9ADE 0%, #8F749CE6 100%) 0% 0% no-repeat padding-box",
    clipPath:
      "polygon(0% 0%, 0% 100%, 15% 80%, 30% 90%, 45% 80%, 60% 90%, 75% 75%, 90% 95%, 100% 100%, 100% 0%)",
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
          <Typography variant="h4">Title</Typography>
          <Typography variant="subtitle1">Subtitle</Typography>
        </div>
        <div className={classes.mainContainer}>
          <div className={classes.blocks}>
            <div className={classes.block}>Hello</div>
            <div className={classes.block}>Hello</div>
            <div className={classes.block}>Hello</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
